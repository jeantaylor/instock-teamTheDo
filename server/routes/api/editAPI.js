const express = require('express');
const router = express.Router();
const cors = require('cors');
const helper = require('../../helper/helper');
router.use(cors());
const uuid = require('uuid');
const app = express();

// / Initialize Files, File Data
const inventoryData = `${__dirname}` + '/model/inventory.json';
let inventory = require(inventoryData);

app.use(express.urlencoded({ extended: true }));


router.get('/:warehouse/:product', (req, res) => {
	// res.json({msg: "At least one thing works?"})

	const foundWarehouse = inventory.filter((place) => place.warehouse === req.params.warehouse);

	const warehouseData = foundWarehouse[0];

	const foundItem = warehouseData.products.filter((item) => item.ref === req.params.product);

	res.json(foundItem[0]);
});

module.exports = router;
