import React, { useState, useEffect } from 'react'
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar"
import { useNavigate } from "react-router-dom";
import useGetProducts from '../hooks/useGetProducts';
import { useContext } from 'react';
import AppContext from '../context/appContext';

const SearchPage = () => {

  const navigate = useNavigate();
  const products = useGetProducts({});
  const {addToCart} = useContext(AppContext)

  
  return (
    <>
      <Navbar  />
      <CategoryBar  />

      <div className="products-container">
        {products.map((elem) => (
          <div className="search-product-card" key={elem.id} >
            <div className="image-container">
              <img src={elem.thumbnail} alt={elem.title} className="product-image" onClick={() => {
            navigate(`/search/${elem.id}`)
          }} />
            </div>
            <div className="product-info">
              <p className="product-title">{elem.title}</p>
              <p className="product-price">Price : $ {elem.price}</p>
              <p className="product-description">{elem.description}</p>
              <button className='add-to-cart-button' onClick={() => {addToCart(elem);}}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPage
