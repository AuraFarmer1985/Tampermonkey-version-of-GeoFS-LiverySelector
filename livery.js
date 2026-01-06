geofs.liveries = geofs.liveries || {};
geofs.liveries.concorde = geofs.liveries.concorde || [];

geofs.liveries.concorde.push({
    name: "Air India – New Livery",
    airline: "Air India",
    author: "Custom by Dhruv Pandit",
    description: "Air India new Tata Group livery adapted for Concorde",
    version: "1.0",

    textures: {
        fuselage: "https://YOUR_IMAGE_LINK_HERE/airindia_concorde_fuselage.png",
        wings: "https://YOUR_IMAGE_LINK_HERE/airindia_concorde_wings.png",
        tail: "https://YOUR_IMAGE_LINK_HERE/airindia_concorde_tail.png"
    },

    materials: {
        fuselage: {
            shininess: 90,
            specular: [0.6, 0.6, 0.6]
        },
        wings: {
            shininess: 70,
            specular: [0.4, 0.4, 0.4]
        }
    },

    geometry: {
        tailLogo: true,
        winglets: false
    }
});
