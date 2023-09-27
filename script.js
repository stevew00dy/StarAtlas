

// Import crafting tree data from separate files
import componentsData from './resources/components.js';
import compoundMaterialsData from './resources/compoundMaterials.js';
import rawMaterialsData from './resources/rawMaterials.js';
import nftData from './resources/nft.js';

// Combine crafting tree data into a single object for ease of lookup
const resourceBreakdown = {
    ...componentsData,
    ...compoundMaterialsData,
    ...rawMaterialsData,
    ...nftData
};

const resourceSelect = document.getElementById("resourceSelect");
const craftingTreeDiv = document.getElementById("craftingTree");

function populateResourceDropdown() {
    // Clear the existing options
    resourceSelect.innerHTML = '';

    // Add SDUs from resourceBreakdown
    for (const resource in resourceBreakdown) {
        if (resourceBreakdown[resource].type === "NFT") {
            const option = document.createElement("option");
            option.value = resource;
            option.textContent = resource;
            resourceSelect.appendChild(option);
        }
    }
    console.log("Dropdown Options:", resourceSelect.innerHTML); // Log the dropdown options
}

function getRawMaterials(resource, quantity) {
    let results = {};

    const components = resourceBreakdown[resource]?.requires;
    if (!components) {
        return { [resource]: quantity };
    }

    components.forEach(comp => {
        const subMaterials = getRawMaterials(comp.resource, comp.quantity);
        for (let material in subMaterials) {
            if (!results[material]) {
                results[material] = 0;
            }
            results[material] += subMaterials[material] * quantity;
        }
    });

    return results;
}

function calculateResourceRequirements() {
  
    const selectedResource = resourceSelect.value;
    
    
    if (!(selectedResource in resourceBreakdown)) {
        craftingTreeDiv.innerHTML = "Resource not found.";
        return;
    }

    const rawMaterials = getRawMaterials(selectedResource, 1);
    console.log("Raw Materials:", rawMaterials);
    // Split the materials into categories
    let rawList = {};
    let compoundList = {};
    let componentList = {};

    for (let material in rawMaterials) {
        console.log("Material:", material); // Add this line
        if (rawMaterialsData[material]) {
            console.log("Raw Material Data for", material, ":", rawMaterialsData[material]); // Add this line
            console.log("Existing Quantity in rawList for", material, ":", rawList[material]); // Add this line
            rawList[material] = (rawList[material] || 0) + rawMaterials[material];
            console.log("Updated Quantity in rawList for", material, ":", rawList[material]); // Add this line
        } else if (compoundMaterialsData[material]) {
            compoundList[material] = (compoundList[material] || 0) + rawMaterials[material];
        } else if (componentsData[material]) {
            componentList[material] = (componentList[material] || 0) + rawMaterials[material];
        }
    }
   console.log("Raw List:", rawList);
    console.log("Compound List:", compoundList);
    console.log("Component List:", componentList);

    console.log("Raw Materials Data:", rawMaterialsData);
    console.log("Compound Materials Data:", compoundMaterialsData);
    console.log("Components Data:", componentsData);

    
    // Generate the HTML for the table
    let html = `<h2>Resource Requirements</h2>`;

    html += generateTableHtml("Raw Materials", rawList);
    html += generateTableHtml("Compound Materials", compoundList);
    html += generateTableHtml("Components", componentList);

    console.log("Generated HTML:", html); // Log the generated HTML

    craftingTreeDiv.innerHTML = html;
    
}


function generateTableHtml(header, list) {
    console.log(`Generating table for ${header}, list:`, list);
   
    console.log(`Table for ${header} is empty. Returning empty string.`);
    let html = `<h3>${header}</h3><table><tr><th>Resource</th><th>Quantity</th></tr>`;
    for (let material in list) {
        html += `<tr><td>${material}</td><td>${list[material]}</td></tr>`;
    }
    html += '</table>';
    console.log("Generated HTML:", html); // Add this line to see the generated HTML
    return html;

    
}

// Event listener for resource selection
resourceSelect.addEventListener("change", calculateResourceRequirements);

// Initial setup
populateResourceDropdown();
calculateResourceRequirements();
