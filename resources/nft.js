import componentsData from './components.js';
import compoundMaterialsData from './compoundMaterials.js';
import rawMaterialsData from './rawMaterials.js';

const nftData = {
  "Calico Maxhog": {
    type: "NFT",
    requires: [
      { resource: "Steel", quantity: 97200 },
      { resource: "Polymer", quantity: 77760 },
      { resource: "Electronics", quantity: 38880 },
      { resource: "Energy Substrate", quantity: 24300 },
      { resource: "Survey Data Unit", quantity: 5554 },
    ],
  },

};

export default nftData;
