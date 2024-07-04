import React, { useState } from 'react'
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar"

const SearchPage = (props) => {

    const { categories } = props;
    const [searchText, setSearchText] = useState("")
    const [products, setProducts] = useState([]);

    

    return (
        <>
            {/* <Navbar getData = {getData} /> */}

            <Navbar setProducts = {setProducts} />
            <CategoryBar categories={categories} />
            {
                products.map((item) => {
                    return (
                        <div key={item.id} style={{ margin: "10px" }}>
                            <p >{item.title}</p>
                        </div>
                    )
                })
            }

        </>
    )
}

export default SearchPage
