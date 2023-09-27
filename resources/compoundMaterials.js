const compoundMaterialsData = {
    "Crystal Lattice": {
        weight: 5,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Diamond", quantity: 2 },
            { resource: "Hydrogen", quantity: 7 }
        ]
    },
    "Copper Wire": {
        weight: 1,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Copper", quantity: 1 }
        ]
    },
    "Copper": {
        weight: 1,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Copper Ore", quantity: 1 }
        ]
    },
    "Electronics": {
        weight: 3,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Copper", quantity: 1 },
            { resource: "Polymer", quantity: 1 }
        ]
    },
    "Graphene": {
        weight: 2,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Carbon", quantity: 5 }
        ]
    },
    "Hydrocarbon": {
        weight: 2,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Hydrogen", quantity: 2 },
            { resource: "Carbon", quantity: 2 }
        ]
    },
    "Iron": {
        weight: 1,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Iron Ore", quantity: 1 }
        ]
    },
    "Magnet": {
        weight: 2,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Iron", quantity: 2 }
        ]
    },
    "Polymer": {
        weight: 1,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Hydrocarbon", quantity: 1 }
        ]
    },
    "Steel": {
        weight: 1,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Carbon", quantity: 2 },
            { resource: "Iron", quantity: 1 }
        ]
    }
};

export default compoundMaterialsData;
