import ReactDOM from "react-dom/client";
import "./globalStyle.css";
import HomePage from "./src/Pages/homePage";
import SearchPage from "./src/Pages/amazonSearchPage";
import SignUp from "./src/Pages/signUp";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

import AppContext from "./src/context/appContext";

import ProductInfo from "./src/Pages/productInfo";
import Login from "./src/Pages/login";
const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
const productInfoCards = [
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
];

const categories = [
  "Fresh",
  "Amazon MiniTV",
  "Sell",
  "Best Sellers",
  "Mobiles",
  "Today Deals",
  "Prime",
  "Fashion",
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  const router = createBrowserRouter([
    {
      path:'/',
      element:!loggedInUser ? <SignUp /> : <HomePage productInfoCards={productInfoCards} />
    },
    
    {
      path:'/search',
      element: !loggedInUser ? <SignUp /> : <SearchPage />
    },

    {
      path:'/search/:id',
      element: !loggedInUser ? <SignUp /> : <ProductInfo/>
    },

    {
      path:'/signup',
      element: loggedInUser ? <HomePage /> : <SignUp/>
    },

    {
      path: "/login",
      element: loggedInUser ? <HomePage /> :  <Login />
    }

  ]);

  // const addToCart = (elem) => {
  //   const isPresent = cart.findIndex((CartITEM) => CartITEM.id === elem.id);
  //   if(isPresent === -1) {
  //     const newCart = [...cart];
  //     newCart.push({
  //       title: elem.title,
  //       id: elem.id,
  //       price: elem.price,
  //       count: 1,
  //     });
  //     setCart(newCart);
  //   }

  //   else {
  //     let newCart = cart.map((cartItem) => {
  //       if(cartItem.id === elem.id) {
  //         const newCartItem = {...cartItem};
  //         newCartItem.count = newCartItem.count + 1;
  //         return newCartItem
  //       }

  //       else {
  //         return cartItem
  //       }
  //     });
  //     setCart(newCart);
  //   }
  // };



  // console.log(cart);
  

  const addToCart = (elem)=>{
    // check if product is already present in cart
    const isPresent =cart.findIndex((cI)=>cI.id===elem.id);
    if(isPresent===-1){
      const newCart = [...cart];
      newCart.push({
        title:elem.title,
        id:elem.id,
        price:elem.price,
        count:1
      });
      setCart(newCart);
    }
    else{
      const newCart = cart.map((cartItem)=>{
        if(cartItem.id==elem.id){
          const newCartItem = {...cartItem};
          newCartItem.count = newCartItem.count +1;
          return newCartItem;
        }
        else{
          return cartItem;
        }
      });
      setCart(newCart);
    }
  }

  const appLogin = (user) => {
      setLoggedInUser(user)
  }

  const contextValues = {
    searchText, setSearchText, categories, cart, addToCart, appLogin, loggedInUser
  }

  console.log(("state : ", loggedInUser));

  return(
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router}/>
    </AppContext.Provider>
  );
};

root.render(<App />);
