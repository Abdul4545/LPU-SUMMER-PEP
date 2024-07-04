import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const categoryBar = (props) => {
    const { categories } = props;
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

export default categoryBar
