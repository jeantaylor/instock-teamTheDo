const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();

// / Initialize Files, File Data
// Template:
const inventoryData =
  "/Users/codeepalmer/Desktop/instock-teamTheDo/server/model/inventory.json";
let inventory = require(inventoryData);



app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(inventory);
});

/// HTTP Req Methods
// Template:
// router.get("/", (req, res) => {
// });

module.exports = router;
