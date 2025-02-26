import React, { useState, useEffect, useContext } from 'react'

import AppContext from '../context/appContext';

const useGetProducts = ({isSearchTextDependent = true}) => {
    const {searchText} = useContext(AppContext);

    const [products, setProducts] = useState([]);
    
    async function getData(stx) {
        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${stx}`);
            const data = await res.json();
            setProducts(data.products);
            
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {

        if(isSearchTextDependent) {
            getData(searchText);
        }

        else {
            getData("");
        }

    }, [searchText])

    return products;
}

export default useGetProducts
