const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();

const locationData = `${__dirname}` + "/model/locations.json";
let locations = require(locationData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(locations);
});

module.exports = router;
