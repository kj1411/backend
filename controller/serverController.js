const Maps = require("../models/Maps")
const Settings = require("../models/Settings")
const mapArray = require("../data/serverData")
const settingsArray =require("../data/serverData")

const getServerDetails = async (req, res) => {
    try {
        const settings = await Settings.find();
        const maps = await Maps.find();
        res.status(200).json({
            success:true,
            message:"data sent successfully",
            data:{
                settings:settings,
                maps:maps
            }
        })
    } catch (error) {
        console.error("Error fetching settings:", error);
        return {
            success:false,
            message:error
        }
    }
}

module.exports = {
    getServerDetails
}