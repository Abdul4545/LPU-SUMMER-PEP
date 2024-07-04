const { productsCollection } = require("../db.js")

const getProducts = async (req, res) => {
    const products = await productsCollection.find().toArray();
    res.json({
        status: "success",
        data: {
            products: products,
        },
    });
}

const addProduct = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.price) {
        res.status(400);
        res.json({
            status: "fail",
            message: "Name and price are required"
        })
        return;
    }

    const result = await productsCollection.insertOne(body);
    res.json({
        status: "success",
        data: {
            product: result,
        },
    });
}

module.exports = {
    getProducts,
    addProduct
}