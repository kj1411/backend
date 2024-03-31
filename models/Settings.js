const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    settings: [{
        key: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model("Settings", SettingsSchema);
