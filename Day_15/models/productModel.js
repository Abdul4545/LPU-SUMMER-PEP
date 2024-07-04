
const { Timestamp } = require("mongodb");
const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,

    description: String,

    price: {
        type: Number,
        required: true
    },

    thumbnail: {
        type:String,
    },

    images: [],

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});


const productModel = mongoose.model("product", productSchema)

module.exports = {
    productModel
}