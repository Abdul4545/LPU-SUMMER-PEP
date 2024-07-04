const { productModel } = require("../models/productModel")

const checkID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);

        if (!product) {
            res.status(404);
            res.json({
                status: "fail",
                message: "Product ID not found"
            })
            return;
        }
        next();

    } catch (error) {
        if (error.name === "CastError") {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid product ID!"
            })
            return;
        }

        res.status(500)
        res.json({
            status: "fail",
            error: "Internal Server Error"
        })

    }
}

const getProducts = async (req, res) => {

    const products = await productModel.find({})
    res.send({
        status: "Success",
        data: {
            products: products
        },
    });
};

const addProduct = async (req, res) => {
    const body = req.body;
    try {
        const newProduct = await productModel.create(body);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });

    } catch (error) {
        console.log(error);
        res.status(500)
        res.json({
            status: "fail",
            info: error.message,
            message: "Internal server error"
        })
    }
};

const replaceProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = req.body;
        const updateProduct = await productModel.findOneAndReplace({ _id: id }, product, { new: true });
        res.json({
            status: "success",
            data: {
                product: updateProduct,
            },
        });

    } catch (error) {
        console.log(error);
        res.status(500)
        res.json({
            status: "fail",
            info: error.message,
            message: "Internal server error"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await productModel.findByIdAndDelete(id)
        // res.status(204);
        // res.json({
        //     status: "Success",
        //     message: `Product deleted successfully with id ${id}`
        // })

        if (deleteItem) {
            res.json({
                "success": "product has been deleted",
                deleteItem

            })
        }

        else {
            res.json({
                "failed": "No any product found with this id"
            })
        }

    } catch (error) {
        res.status(500)
        res.json({
            status: "fail",
            info: error.message,
            message: "Internal server error"
        })
    }

}

const updateProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const body = req.body;
        body.updatedAt = Date.now()

        const newProduct = await productModel.findOneAndUpdate(
            { _id: id },
            { body, "$unset": { images: "" } },
            { new: true }
        );

        res.json({
            status: "Success",
            data: {
                product: newProduct
            }
        })

    } catch (error) {
        res.status(500);
        res.json({
            status: "Fail",
            message: "Internal Server Error",
            info: error
        })

    }


    // try {
    //     const newProduct = {};

    //     if(name) {
    //         newProduct.name = name;
    //         newProduct.updatedAt = updatedAt;
    //     }

    //     if(description) {
    //         newProduct.description = description;
    //         newProduct.updatedAt = updatedAt;
    //     }

    //     if(price) {
    //         newProduct.price = price;
    //         newProduct.updatedAt = updatedAt;
    //     }

    //     if(thumbnail) {
    //         newProduct.thumbnail = thumbnail;
    //         newProduct.updatedAt = updatedAt;
    //     }

    //     const {id} = req.params;

    //     let product = await productModel.findById(id);

    //     product = await productModel.findByIdAndUpdate(id, {$set: newProduct})
    //     res.json(
    //         "Successfully updated"
    //     )

    // } catch (error) {
    //     console.error(error.message)
    //     res.status(500).send("Internal server error");
    // }
}

const listProduct = async (req, res) => {
    const {limit = 100, q = "", fields = "", sort = "", page = 2, ...filters} = req.query;
    const selectionField = fields.split("_").join(" ");

    // const products = productModel.find({
    //     title: {
    //         $regex : q
    //     }
    // });

    // let products = productModel.find(filters);

    // search functionality
    let products = productModel.find(filters).where("title").regex(q);

    // count the no of products
    let cloneProduct = products.clone();
    const totalData = await cloneProduct.countDocuments()

    // sorting
    products = products.select(selectionField)

    // pagination and limit
    products = await products.sort(sort).skip((page-1) * limit).limit(limit)

    console.log(products.length);

    res.json({
        status: "Success",
        result: (await products).length,
        totalData,

        data: {
            products
        }
    })
}

module.exports = { getProducts, addProduct, replaceProduct, deleteProduct, updateProduct, checkID, listProduct }