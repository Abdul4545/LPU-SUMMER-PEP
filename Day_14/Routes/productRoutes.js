const express = require("express")

const {getProducts, addProduct} = require("../Controllers/productControllers.js")

const productRouter = express.Router();


productRouter.route("/").get(getProducts).post(addProduct)

module.exports = productRouter;

