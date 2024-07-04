require("dotenv").config()

// const { productsCollection } = require("./db.js")

// const {getProduct, addProduct} = require("./Controllers/productControllers.js")

const express = require("express");

const productRouter = require("./Routes/productRoutes.js");

const app = express();
app.use(express.json());


// app.get("/products", getProduct)
// app.post("/products", addProduct)

// app.route("/products").get(getProduct).post(addProduct)

app.use("/products", productRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running at port no ${process.env.PORT}`);
})





