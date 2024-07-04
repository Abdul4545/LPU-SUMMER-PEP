require("dotenv").config()
require("./config/db.js")

const express = require("express")

const {productRouter} = require("./routes/productRoutes.js")

const app = express();
app.use(express.json());

app.use("/products", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`------------ Server started at : ${process.env.PORT} -------------`);
})