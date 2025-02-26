import { useEffect, useState } from "react"

const useGetProductById = (id) => {

    const [productInfo, setProductInfo] = useState([])

    const getProductById = async () => {

        try {
            const res = await fetch(`https://dummyjson.com/products/search?q=${id}`);
                const data = await res.json();
                setProductInfo(data);
            
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    useEffect(() => {
        getProductById();
    }, [])

    return productInfo;
}

export default useGetProductById;