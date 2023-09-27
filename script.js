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

  function calculateResourceRequirements() {
    const selectedResource = resourceSelect.value;

    if (!(selectedResource in craftingTree)) {
        craftingTreeDiv.innerHTML = "Resource not found.";
        return;
    }

    const resource = craftingTree[selectedResource];
    const requires = resource.requires || [];

    const rawMaterialsRequirements = {}; // Object to store raw materials requirements
    const compoundMaterialsRequirements = {}; // Object to store compound materials requirements
    const componentsRequirements = {}; // Object to store components requirements

    function calculateRequirements(requirement) {
        const { resource, quantity } = requirement;

        // Raw Materials
        if (rawMaterialsData.hasOwnProperty(resource)) {
            if (!rawMaterialsRequirements[resource]) {
                rawMaterialsRequirements[resource] = 0;
            }
            rawMaterialsRequirements[resource] += quantity;

        // Compound Materials
        } else if (compoundMaterialsData.hasOwnProperty(resource)) {
            if (!compoundMaterialsRequirements[resource]) {
                compoundMaterialsRequirements[resource] = 0;
            }
            compoundMaterialsRequirements[resource] += quantity;

            const compoundResource = compoundMaterialsData[resource];
            const compoundRequires = compoundResource.requires || [];
            compoundRequires.forEach(compoundRequirement => {
                const compoundQuantity = compoundRequirement.quantity * quantity;
                calculateRequirements({ resource: compoundRequirement.resource, quantity: compoundQuantity });
            });

        // Components
        } else if (componentsData.hasOwnProperty(resource)) {
            if (!componentsRequirements[resource]) {
                componentsRequirements[resource] = 0;
            }
            componentsRequirements[resource] += quantity;

            const component = componentsData[resource];
            const componentRequires = component.requires || [];
            componentRequires.forEach(componentRequirement => {
                const { resource: subResource, quantity: subQuantity } = componentRequirement;
                calculateRequirements({ resource: subResource, quantity: subQuantity * quantity });
            });
        }
    }

    requires.forEach(calculateRequirements);

    // Generate the HTML for the tables
    const generateTableHTML = (header, data) => {
        let html = `<h3>${header}</h3>`;
        html += '<table>';
        html += '<tr><th>Resource</th><th>Quantity</th></tr>';

        for (const resourceName in data) {
            const quantity = data[resourceName];
            html += `<tr><td>${resourceName}</td><td>${quantity}</td></tr>`;
        }

        html += '</table>';
        return html;
    };

    craftingTreeDiv.innerHTML = [
        '<h2>Resource Requirements</h2>',
        generateTableHTML('Raw Materials', rawMaterialsRequirements),
        generateTableHTML('Compound Materials', compoundMaterialsRequirements),
        generateTableHTML('Components', componentsRequirements)
    ].join('');
}


 

// Event listener for resource selection
resourceSelect.addEventListener("change", calculateResourceRequirements);

// Initial setup
populateResourceDropdown();
calculateResourceRequirements();
