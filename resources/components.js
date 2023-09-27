const componentsData = {
    "Energy Substrate": {
        weight: 5,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Polymer", quantity: 2 },
            { resource: "Graphene", quantity: 1 }
        ]
    },
    "Electromagnet": {
        weight: 5,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Copper Wire", quantity: 4 },
            { resource: "Magnet", quantity: 1 }
        ]
    },
    "Framework": {
        weight: 2,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Iron", quantity: 2 }
        ]
    },
    "Power Source": {
        weight: 4,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Lumanite", quantity: 2 },
            { resource: "Graphene", quantity: 1 }
        ]
    },
    "Particle Accelerator": {
        weight: 10,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Strange Emitter", quantity: 1 },
            { resource: "Super Conductor", quantity: 1 }
        ]
    },
    "Radiation Absorber": {
        weight: 10,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Crystal Lattice", quantity: 1 },
            { resource: "Energy Substrate", quantity: 1 }
        ]
    },
    "Super Conductor": {
        weight: 5,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Copper Wire", quantity: 5 },
            { resource: "Graphene", quantity: 2 }
        ]
    },
    "Strange Emitter": {
        weight: 5,
        valueInAtlas: 0,
        valueInUSD: 0,
        requires: [
            { resource: "Lumanite", quantity: 4 },
            { resource: "Polymer", quantity: 2 }
        ]
    }
};

export default componentsData;
