const rawMaterials = {
    arco: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 4
    },
    biomass: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 1
    },
    carbon: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 1
    },
    copperOre: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 2
    },
    diamond: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 4
    },
    hydrogen: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 1
    },
    ironOre: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 2
    },
    lumanite: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 2.5
    },
    rochinol: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        hardness: 4
    }
};

const compoundMaterials = {
    crystalLattice: {
        weight: 5,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            factionCrystal: 2,
            hydrogen: 7
        }
    },
    copperWire: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            copper: 1
        }
    },
    copper: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            copperOre: 1
        }
    },
    electronics: {
        weight: 3,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            copper: 1,
            polymer: 1
        }
    },
    graphene: {
        weight: 2,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            carbon: 5
        }
    },
    hydrocarbon: {
        weight: 2,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            hydrogen: 2,
            carbon: 2
        }
    },
    iron: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            ironOre: 1
        }
    },
    magnet: {
        weight: 2,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            iron: 2
        }
    },
    polymer: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            hydrocarbon: 1
        }
    },
    steel: {
        weight: 1,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            carbon: 2,
            iron: 1
        }
    },
    toolkit: {
        weight: 1,  // Adjust the weight as per your data
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            iron: 2
        }
    }

};

// Define your data
const components = {
    energySubstrate: {
        weight: 5,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            polymer: 2,
            graphene: 1
        }
    },
    electromagnet: {
        weight: 5,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            copperWire: 4,
            magnet: 1
        }
    },
    framework: {
        weight: 2,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            iron: 2
        }
    },
    powerSource: {
        weight: 4,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            lumanite: 2,
            graphene: 1
        }
    },
    particleAccelerator: {
        weight: 10,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            strangeEmitter: 1,
            superConductor: 1
        }
    },
    radiationAbsorber: {
        weight: 10,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            crystalLattice: 1,
            energySubstrate: 1
        }
    },
    superConductor: {
        weight: 5,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            copperWire: 5,
            graphene: 2
        }
    },
    strangeEmitter: {
        weight: 5,
        valueInAtlas: 0,
        valueInUsd: 0,
        requires: {
            lumanite: 4,
            polymer: 2
        }
    }
};

// Define your data
const nfts = {
    calicoMaxhog: {
        requires: {
            steel: 97200,
            polymer: 77760,
            electronics: 38880,
            energySubstrate: 24300,
            SDU: 5554
        }
    },
    fimbulAirbike: {
        requires: {
            iron: 13247,
            toolkit: 7920,
            copperWire: 23760,
            powerSource: 3960,
            SDU: 679
        }
    },
    fimbulBYOSButch: {
        requires: {
            steel: 5410286,
            graphene: 3606857,
            powerSource: 1803428,
            strangeEmitter: 1082057,
            radiationAbsorber: 676286,
            particleAccelerator: 541028,
            SDU: 309159
        }
    },
    fimbulECOSUnibomber: {
        requires: {
            copper: 28099,
            toolkit: 16800,
            polymer: 20160,
            powerSource: 8400,
            SDU: 1440
        }
    },
    fimbulMamba: {
        requires: {
            steel: 1128600,
            graphene: 752400,
            copperWire: 2257200,
            electromagnet: 282150,
            superConductor: 225720,
            SDU: 64491
        }
    },
    fimbulMambaEx: {
        requires: {
            steel: 1180800,
            hydrocarbon: 1180800,
            magnet: 787200,
            crystalLattice: 295200,
            radiationAbsorber: 147600,
            SDU: 67474
        }
    },
    cssTier0: {
        requires: {
            iron: 59410,
            framework: 26640,
            polymer: 42624,
            crystalLattice: 13320,
            SDU: 3045
        }
    },
    cssTier1: {
        requires: {
            framework: 446700,
            polymer: 714720,
            strangeEmitter: 178680,
            powerSource: 297800,
            electromagnet: 223350,
            SDU: 51051
        }
    },
    ogrkaTursic: {
        requires: {
            steel: 1648200,
            hydrocarbon: 1648200,
            polymer: 1318560,
            energySubstrate: 412050,
            superConductor: 329640,
            SDU: 94183
        }
    },
    pearceR6: {
        requires: {
            steel: 655200,
            copperWire: 1310400,
            electronics: 262080,
            powerSource: 218400,
            electromagnet: 163800,
            SDU: 37440
        }
    },
    pearceX4: {
        requires: {
            graphene: 10877,
            toolkit: 10877,
            copperWire: 32630,
            powerSource: 5438,
            SDU: 932
        }
    },
    vzusSolos: {
        requires: {
            graphene: 9600,
            toolkit: 9600,
            magnet: 9600,
            powerSource: 4800,
            SDU: 823
        }
    }
};

function createTable(sectionTitle, resources) {
    const table = document.createElement('table');
    table.classList.add('table');
    table.innerHTML = `<tr><th>${sectionTitle}</th><th>Quantity</th></tr>`;
    for (const resource in resources) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${resource}</td><td>${resources[resource]}</td>`;
        table.appendChild(tr);
    }
    return table;
}

function accumulateRawMaterials(resource, quantity, accumulatedRaw, accumulatedCompound) {
    if (resource in compoundMaterials) {
        if (!(resource in accumulatedCompound)) {
            accumulatedCompound[resource] = 0;
        }
        accumulatedCompound[resource] += quantity;
        
        for (const [subResource, subQuantity] of Object.entries(compoundMaterials[resource].requires)) {
            accumulateRawMaterials(subResource, subQuantity * quantity, accumulatedRaw, accumulatedCompound);
        }
    } else if (resource in components) {
        for (const [subResource, subQuantity] of Object.entries(components[resource].requires)) {
            accumulateRawMaterials(subResource, subQuantity * quantity, accumulatedRaw, accumulatedCompound);
        }
    } else if (resource in rawMaterials) {
        if (!(resource in accumulatedRaw)) {
            accumulatedRaw[resource] = 0;
        }
        accumulatedRaw[resource] += quantity;
    }
}

function displayCraftingDetails(selectedNFT) {
    const detailsDiv = document.getElementById('crafting-details');
    detailsDiv.innerHTML = '';  // Clear any previous details

    const nftData = nfts[selectedNFT];
    const rawMaterialAccumulation = {};
    const compoundMaterialAccumulation = {};
    const componentResources = {};
    const compoundResources = {};  // Define compoundResources here
    const rawResources = {};  // Define rawResources here
    const sduResources = {};

    // Accumulate raw and compound materials
    for (const resource in nftData.requires) {
        accumulateRawMaterials(resource, nftData.requires[resource], rawMaterialAccumulation, compoundMaterialAccumulation);
    }

    // Categorize the required resources
    for (const resource in nftData.requires) {
        if (resource in components) {
            componentResources[resource] = nftData.requires[resource];
        } else if (resource in compoundMaterials) {
            compoundResources[resource] = nftData.requires[resource];
        } else if (resource === 'SDU') {
            sduResources[resource] = nftData.requires[resource];
        } else {
            rawResources[resource] = nftData.requires[resource];
        }
    }

     // Create and append tables for each section
     if (Object.keys(componentResources).length > 0) {
        const componentTable = createTable('Components', componentResources);
        detailsDiv.appendChild(componentTable);
    }
    if (Object.keys(compoundMaterialAccumulation).length > 0) {
        const compoundTable = createTable('Compounds', compoundMaterialAccumulation);
        detailsDiv.appendChild(compoundTable);
    }
    if (Object.keys(rawMaterialAccumulation).length > 0) {
        const rawTable = createTable('Raw Materials', rawMaterialAccumulation);
        detailsDiv.appendChild(rawTable);
    }
    if (Object.keys(sduResources).length > 0) {
        const sduTable = createTable('Survey Data Unit', sduResources);
        detailsDiv.appendChild(sduTable);
    }
}

function convertCamelToTitle(camelCase) {
    return camelCase
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim();
}

function populateNFTDropdown() {
    const dropdown = document.getElementById('nft-dropdown');
    
    // Create an empty option and append it to the dropdown
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = 'Select a Craft';
    dropdown.appendChild(emptyOption);

    Object.keys(nfts).forEach(nft => {
        const option = document.createElement('option');
        option.value = nft;
        option.textContent = convertCamelToTitle(nft);  // Convert camelCase to title case
        dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', () => {
        if (dropdown.value) {  // Check if a value is selected
            displayCraftingDetails(dropdown.value);
        }
    });
}

export { populateNFTDropdown };
