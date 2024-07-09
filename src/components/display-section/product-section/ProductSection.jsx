import React from 'react'
import "./productsection.css";
import NikerunShoe from "../../../assets/imgs/nikerunshoe.png"
import NikeswimShoe from "../../../assets/imgs/nikeswimshoe.png"
import NikejogShoe from "../../../assets/imgs/nikejogshoe.png"
import NiketrackShoe from "../../../assets/imgs/niketrackshoe.png"
import NikelukeShoe from "../../../assets/imgs/nikelukeshoe.png"
import NikesportShoe from "../../../assets/imgs/nikesportshoe.png"
import NikeeveningShoe from "../../../assets/imgs/nikeveningshoe.png"
import NikeraceShoe from "../../../assets/imgs/nikeraceshoe.png"
import Star from "../../../assets/imgs/star.png"
import CartIcon from "../../../assets/imgs/whitecart.png"

export default function ProductSection() {
  return (
    <div id='products'>
      <h1>Best Sellers</h1>
      <div className ='products-div'>
      <div  className='products-one'>
       <img src={NikerunShoe} alt="" />
        <div>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'>(5.8k Reviews)</span>
        </div>
          <p className='.bigtext'>Nike Running Shoe</p>
          <div className='product-details'>
            <p className='boldtext'>N959,765<span className='smalltext'> 4,430</span></p>
            <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
          </div>
      </div>
      <div className='products-one'>
      <img src={NikeswimShoe} alt="" />
      <div>
         <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'> (5.8k Reviews)</span>
          <p className='bigtext'>Nike Running Shoe</p>
        <div  className='product-details'>
        <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span> </p>
        <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
        </div>
      </div>
      </div>
      <div className='products-one'>
      <img src={NikejogShoe} alt="" />
      <div >
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'>(5.8k Reviews)</span>
          <p className='bigtext'>Nike Running Shoe</p>
         <div className='product-details'>
          <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span></p>
          <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
         </div>
      </div>
      </div>
      <div className='products-one'>
      <img src={NiketrackShoe} alt="" />
      <div>
      <div>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'>(5.8k Reviews)</span>
          <p className='bigtext'>Nike Running Shoe</p>
          <div className='product-details'>
          <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span> </p>
          <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
          </div>
      </div>
      </div>
      </div>
      </div>
      <div className ='products-div products-div2' >
      <div  className='products-one'>
       <img src={NikelukeShoe} alt="" />
        <div>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'>(5.8k Reviews)</span>
        </div>
          <p className='.bigtext'>Nike Running Shoe</p>
          <div className='product-details'>
            <p className='boldtext'>N959,765<span className='smalltext'> 4,430</span></p>
            <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
          </div>
      </div>
      <div className='products-one'>
      <img src={NikesportShoe} alt="" />
      <div>
         <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'> (5.8k Reviews)</span>
          <p className='bigtext'>Nike Running Shoe</p>
        <div  className='product-details'>
        <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span> </p>
        <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
        </div>
      </div>
      </div>
      <div className='products-one'>
      <img src={NikeeveningShoe} alt="" />
      <div >
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'>(5.8k Reviews)</span>
          <p className='bigtext'>Nike Running Shoe</p>
         <div className='product-details'>
          <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span></p>
          <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
         </div>
      </div>
      </div>
      <div className='products-one'>
      <img src={NikeraceShoe} alt="" />
      <div>
      <div>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <span className='reviews'>(5.8k Reviews)</span>
          <p className='bigtext'>Nike Running Shoe</p>
          <div className='product-details'>
          <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span> </p>
          <a href="./cartpage"><img src={CartIcon} className='icon' alt="" /></a>
          </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
