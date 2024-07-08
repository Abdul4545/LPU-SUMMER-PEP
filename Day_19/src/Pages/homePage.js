import React from "react";
import ProductInfoCard from "../components/productInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar"
import Footer from "../components/footer"
import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";


const HomePage = (props) => {
    const { productInfoCards, categories, setSearchText, searchText } = props;
  const navigate = useNavigate();

  
  const product = useGetProducts();
  let count = 0;
  const reqLength = 16;

  const filteredProducts = product.filter((element, idx) => {
    if(Math.random() >= 0.5 || (reqLength - count) >= (product.length-idx)) {
      count++;
      return true
    } else return false;
  })

  console.log("filteredProducts : ", filteredProducts);

  const openSearchPage = () => {
    navigate("/search");
  };

  
  return (
    <div className="homepage-root-container">
      <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} searchText={searchText} />
      <CategoryBar categories={categories} />
      <div className="homepage-body">
        <img
          className="carousal-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
          alt="Carousal"
        />
        <div className="products-cards-container">

          {[...Array(4).keys()].map((element) => {
              return <ProductInfoCard data = {filteredProducts.slice(element * 4, element * 4 + 4)} />
          })}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

