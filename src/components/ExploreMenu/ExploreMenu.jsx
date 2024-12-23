import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
<<<<<<< HEAD
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable and delicious array of dishes crafted with the finest ingredients and culinary
        expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
=======
        <p className='explore-menu-text'>Choose from a diverse menu of your liking featuring a delectable array of dishes crafted with the finest ingredients and culinary
        expertise. Our primary mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
>>>>>>> 13bda7e113a6bad5a2791af5e1426b3c5903fc68
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
