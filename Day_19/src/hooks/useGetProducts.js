import React, { useState, useEffect } from 'react'

const useGetProducts = (searchText = "") => {
    const [products, setProducts] = useState([]);
    async function getData() {
        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            const data = await res.json();
            setProducts(data.products);
            
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getData();
    }, [searchText])

    return products;
}

export default useGetProducts
