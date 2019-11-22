const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();

// / Initialize Files, File Data
// Template:
const inventoryData = `${__dirname}` + "/model/inventory.json";
let inventory = require(inventoryData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(inventory);
});

router.get("/:warehouse/:product", (req, res) => {
  // res.json({msg: "At least one thing works?"})

  const foundWarehouse = inventory.filter(
    place => place.warehouse === req.params.warehouse
  );

  const warehouseData = foundWarehouse[0]

  const foundItem = warehouseData.products.filter(
    item => item.ref === req.params.product
  );

  res.json(foundItem[0]);
});

router.put("/", (req, res) => {
  // console.log(req.body);
  const found = inventory.some(
    warehouse => warehouse.warehouse === req.body.warehouse
  );

  if (found) {
    let warehouseIndex = inventory.findIndex(
      warehouse => warehouse.warehouse === req.body.warehouse
    );

    const newInventory = {
      ref: uuid(),
      warehouse: req.body.warehouse,
      name: req.body.product,
      lastOrdered: req.body.lastOrdered,
      location: req.body.location,
      quantity: req.body.quantity,
      desc: "",
      categories: ""
    };
    inventory[warehouseIndex].products.push(newInventory);
    // console.log(inventory);
    helper.writeJSONFile(inventoryData, inventory);
  } else {
    res.status(400).json({
      errorMessage: `Warehouse with ID: ${req.params.warehouse} not found`
    });
  }
});

/// HTTP Req Methods
// Template:
// router.get("/", (req, res) => {
// });

module.exports = router;
