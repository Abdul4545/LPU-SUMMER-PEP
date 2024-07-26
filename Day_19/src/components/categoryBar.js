import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import AppContext from '../context/appContext';

const CategoryBar = () => {
    const { categories } = useContext(AppContext);
  return (
    <div>
        <div className='homepage-category-bar'>
            
            <button>
            <GiHamburgerMenu />
                All
            </button>
            <div className='category-items'>
                {
                    categories.map((element) => {
                        return (<p key={element}>{element}</p>)
                    })
                }
            </div>
        </div>
      
    </div>
  )
}

export default CategoryBar
