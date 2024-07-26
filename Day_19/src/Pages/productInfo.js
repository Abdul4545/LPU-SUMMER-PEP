import { useEffect, useState } from "react";
import useGetProductById from "../hooks/useGetProductById";
import Navbar from "../components/navbar";
import { useContext } from "react";
import AppContext from "../context/appContext";


const { useParams } = require("react-router-dom");

const ProductInfo = () => {
    const params = useParams();

    const [product, setProduct] = useState([]);

    const { addToCart, cart } = useContext(AppContext)

    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await res.json();
        setProduct(data);
    }
    useEffect(() => {
        getData();
    }, [params.id])

    const productInfo = useGetProductById(params.id)
    // console.log(productInfo);

    const openSearchPage = () => {
        Navigate("/search")
    }

    return (
        <div>
            <Navbar />
            <div className="product-container">
                <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{product.title}</h2><p className="product-brand"></p>
                    <p className="product-description">{product.description}</p>
                    <h2 className="product-price">${product.price}</h2>
                    <p>Rating : {product.rating} out of 5.0</p>
                    <button className="add-to-cart-button" onClick={() => { addToCart(product); console.log(cart); }}>
                        Add to Cart
                    </button>
                </div>
            </div>
            {/* <h1>{product.title}</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                {
                    product?.images?.map((imgLink) => {
                        return (
                            <img src={`${imgLink}`} height="200px" />
                        )
                    })
                }
            </div> */}

        </div>
    );
}

export default ProductInfo;