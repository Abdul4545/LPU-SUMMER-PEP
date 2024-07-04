import ReactDOM from 'react-dom/client';
import './globalStyle.css';

import HomePage from './src/Pages/homePage';
import SearchPage from "./src/Pages/amazonSearchPage"

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = ['Fresh', 'Amazon miniTV', 'Sell', 'Best Seller', 'Mobile', "Today's Deal", 'Prime', 'Fashion', 'Electronics', 'Customer Service'];


const productinfoCard = [
    {
        id: 1,
        title: "Revamp your home in style",
        products: [
            {
                title: "Cushion covers, bedsheets & more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
            },

            {
                title: "Figurines, vases $ more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
            }, 
            
            {
                title: "Home Storage",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
            }, 

            {
                title: "Lightning Solutions",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
            }, 
        ],
    },

    {
        id: 1,
        title: "Revamp your home in style",
        products: [
            {
                title: "Cushion covers, bedsheets & more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
            },

            {
                title: "Figurines, vases $ more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
            }, 
            
            {
                title: "Home Storage",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
            }, 

            {
                title: "Lightning Solutions",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
            }, 
        ],
    },

    {
        id: 1,
        title: "Revamp your home in style",
        products: [
            {
                title: "Cushion covers, bedsheets & more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
            },

            {
                title: "Figurines, vases $ more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
            }, 
            
            {
                title: "Home Storage",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
            }, 

            {
                title: "Lightning Solutions",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
            }, 
        ],
    },

    {
        id: 1,
        title: "Revamp your home in style",
        products: [
            {
                title: "Cushion covers, bedsheets & more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
            },

            {
                title: "Figurines, vases $ more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
            }, 
            
            {
                title: "Home Storage",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
            }, 

            {
                title: "Lightning Solutions",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
            }, 
        ],
    },   
]

// component
const App = () => {

    return (
        <div>
            {/* <HomePage productinfoCard = {productinfoCard} categories = {categories} /> */}

            <SearchPage categories = {categories} />

        </div>
    )
}

root.render(<App />)