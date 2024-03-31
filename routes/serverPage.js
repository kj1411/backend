const express = require("express");
const {getServerDetails, addMapsToDB, addSettingsToDB } = require("../controller/serverController");
const router = express.Router();

router.route("/").get(getServerDetails)

module.exports = router;