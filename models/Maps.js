const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    mapName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Maps", MapSchema);
