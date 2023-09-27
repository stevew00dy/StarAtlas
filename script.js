// Import crafting tree data from separate files
import consumablesData from './resources/consumables.js';
import componentsData from './resources/components.js';
import compoundMaterialsData from './resources/compoundMaterials.js';
import dataData from './resources/data.js';
import rawMaterialsData from './resources/rawMaterials.js';
import sduData from './resources/sdu.js';

// Combine crafting tree data into a single object
const craftingTree = {
  ...consumablesData,
  ...componentsData,
  ...compoundMaterialsData,
  ...dataData,
  ...rawMaterialsData,
  ...sduData, 
};

const resourceSelect = document.getElementById("resourceSelect");
const craftingTreeDiv = document.getElementById("craftingTree");

// Function to populate the resource dropdown
function populateResourceDropdown() {
    // Clear the existing options
    resourceSelect.innerHTML = '';
  
    // Add SDUs from craftingTree
    for (const resource in craftingTree) {
      if (craftingTree[resource].type === "SDU") {
        const option = document.createElement("option");
        option.value = resource;
        option.textContent = resource;
        resourceSelect.appendChild(option);
      }
    }
  }

// Function to calculate and display resource requirements
function calculateResourceRequirements() {
  const selectedResource = resourceSelect.value;

  // Check if the selected resource exists in craftingTree
  if (!(selectedResource in craftingTree)) {
    craftingTreeDiv.innerHTML = "Resource not found.";
    return;
  }

  const resource = craftingTree[selectedResource];
  const requires = resource.requires || [];

  let resourceRequirements = {}; // Object to store resource requirements
  let rawMaterialsRequirements = {}; // Object to store raw materials requirements

  function calculateRequirements(requirement) {
    const { resource, quantity } = requirement;
    if (!resourceRequirements[resource]) {
      resourceRequirements[resource] = 0;
    }

    resourceRequirements[resource] += quantity;

    // Check if the resource is a raw material
    if (rawMaterialsData.hasOwnProperty(resource)) {
      if (!rawMaterialsRequirements[resource]) {
        rawMaterialsRequirements[resource] = 0;
      }
      rawMaterialsRequirements[resource] += quantity;
    } else if (compoundMaterialsData.hasOwnProperty(resource)) {
      // If it's a compound material, recursively calculate its raw material requirements
      const compoundResource = compoundMaterialsData[resource];
      const compoundRequires = compoundResource.requires || [];
      compoundRequires.forEach(compoundRequirement => {
        const compoundQuantity = compoundRequirement.quantity * quantity;
        calculateRequirements({ resource: compoundRequirement.resource, quantity: compoundQuantity });
      });
    } else if (componentsData.hasOwnProperty(resource)) {
      // Handle all components
      const component = componentsData[resource];
      const componentRequires = component.requires || [];
      componentRequires.forEach(componentRequirement => {
        const { resource: subResource, quantity: subQuantity } = componentRequirement;
        calculateRequirements({ resource: subResource, quantity: subQuantity * quantity });

        // Ensure components are not counted as raw materials
        delete rawMaterialsRequirements[subResource];
      });
    }
  }

  requires.forEach(calculateRequirements);

  let html = ``;
  html += '<h2>Resource Requirements</h2>';
  html += '<h3>Raw Materials</h3>';
  html += '<table>';
  html += '<tr><th>Resource</th><th>Quantity</th></tr>';

  for (const resourceName in rawMaterialsRequirements) {
    const quantity = rawMaterialsRequirements[resourceName];

    html += `<tr><td>${resourceName}</td><td>${quantity}</td></tr>`;
  }

  html += '</table>';

  html += '<h3>Compound Materials</h3>';
  html += '<table>';
  html += '<tr><th>Resource</th><th>Quantity</th></tr>';

  for (const resourceName in compoundMaterialsData) {
    if (compoundMaterialsData.hasOwnProperty(resourceName)) {
      const quantity = resourceRequirements[resourceName];
      if (quantity > 0) {
        html += `<tr><td>${resourceName}</td><td>${quantity}</td></tr>`;
      }
    }
  }

  html += '</table>';

  html += '<h3>Components</h3>';
  html += '<table>';
  html += '<tr><th>Resource</th><th>Quantity</th></tr>';

  for (const resourceName in resourceRequirements) {
    const quantity = resourceRequirements[resourceName];
    if (
      !rawMaterialsData.hasOwnProperty(resourceName) &&
      !compoundMaterialsData.hasOwnProperty(resourceName)
    ) {
      html += `<tr><td>${resourceName}</td><td>${quantity}</td></tr>`;
    }
  }

  html += '</table>';

  craftingTreeDiv.innerHTML = html;
}

// Event listener for resource selection
resourceSelect.addEventListener("change", calculateResourceRequirements);

// Initial setup
populateResourceDropdown();
calculateResourceRequirements();
