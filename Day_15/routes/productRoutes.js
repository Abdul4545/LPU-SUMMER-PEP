const express = require("express")

const productRouter = express.Router();

const {getProducts, addProduct, replaceProduct, deleteProduct, updateProduct, checkID, listProduct} = require("../controllers/productControllers.js")

// GET and POST
productRouter.route("/").get(getProducts).post(addProduct)

productRouter.route("/list").get(listProduct)

// PUT – create or update (replace) a resource. Useful for syncing data.
productRouter.route("/:id").put(checkID, replaceProduct);

// PATCH - update
productRouter.route("/:id").patch(checkID, updateProduct)

// DELETE – remove data.
productRouter.route("/:id").delete(checkID, deleteProduct)


module.exports = {productRouter}