const path = require("path");
const express = require("express");
const productsConstrolllers = require("./../controllers/products.js");
const admin = require("./admin");

const router = express.Router();

router.get("/", productsConstrolllers.getProducts);

module.exports = router;
