const path = require("path");
const express = require("express");
const router = express.Router();
const productsConstrolllers = require("./../controllers/products");

// /admin/add-product => GET
router.get("/add-product", productsConstrolllers.getAddPoduct);

// /admin/add-product => POST
router.post("/add-product", productsConstrolllers.postAddProducts);

exports.router = router;
