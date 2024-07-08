import React, { useState, useEffect } from 'react'
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar"
import { useNavigate } from "react-router-dom";
import useGetProducts from '../hooks/useGetProducts';

const SearchPage = (props) => {

  const { categories, searchText, setSearchText } = props;
  const navigate = useNavigate();

  const products = useGetProducts();

  return (
    <>
      <Navbar setSearchText={setSearchText} searchText={searchText} />
      <CategoryBar categories={categories} />

      <div className="products-container">
        {products.map((elem) => (
          <div className="search-product-card" key={elem.id} onClick={() => {
            navigate(`/search/${elem.id}`)
          }}>
            <div className="image-container">
              <img src={elem.thumbnail} alt={elem.title} className="product-image" />
            </div>
            <div className="product-info">
              <p className="product-title">{elem.title}</p>
              <p className="product-price">Price : $ {elem.price}</p>
              <p className="product-description">{elem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPage
