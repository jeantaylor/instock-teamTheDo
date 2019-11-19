const express = require("express");
const router = express.Router();
const cors = require("cors");  
const helper = require("../../helper/helper");
router.use(cors()); 

/// Initialize Files, File Data
// Template:
// const fileNameData = __dirname + "/../../model/filename.json";
// let data = require(fileNameData);


/// HTTP Req Methods
// Template:
// router.get("/", (req, res) => {
// });


module.exports = router; 