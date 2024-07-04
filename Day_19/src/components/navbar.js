import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const navbar = ({setProducts}) => {

  async function getData(e) {

    const val = e.target.value;
    const res = await fetch(`https://dummyjson.com/products/search?q=${val}`)
    const data = await res.json();
    setProducts(data.products);
    
}
  
  return (
    <div>
        <nav className='homepage-nav'>
                <h4>Amazon.in</h4>
                <p>Adress: <br /> LPU University</p>

                <div className='homepage-search-bar'>
                    <select />
                    <input type='text' onChange={getData}/>
                    <button><IoSearchSharp /></button>
                </div>

                <h5>Profile</h5>
                <h5>Cart</h5>
            </nav>
    </div>
  )
}

export default navbar
