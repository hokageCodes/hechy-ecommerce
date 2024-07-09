import React from 'react'
import './trendingsection.css'
import FlatnikeShoe from "../../../assets/imgs/flatnike.png"
import NikepurpleShoe from "../../../assets/imgs/purplenike.png"
import NikeredwhiteShoe from "../../../assets/imgs/redwhitenike copy.png"
import NikeblackgreenShoe from "../../../assets/imgs/blackgreennike.png"
import NikeredblackShoe from "../../../assets/imgs/redblacknike.png"
export default function TrendingSection() {
  return (
    <div>
        <h1>Trending Products</h1>
        <div className='trending'>
       <div className='trending div'>
       <div >
            <div className='div-details'>
                <img src={FlatnikeShoe} alt="" />
                <p className='first-letter'>Nike Running Shoe</p>
                <p className='second-letter'>N95,765</p>
            </div>
            <div className='div-details'>
            <img src={NikeredwhiteShoe} alt="" />
                <p className='first-letter'>Nike Running Shoe</p>
                <p className='second-letter'>N95,765</p>
            </div>
        </div>
        <div>
            <div className='div-details'>
                <img src={NikepurpleShoe} alt="" />
                <p className='first-letter'>Nike Running Shoe</p>
                <p  className='second-letter'>N95,765</p>
            </div>
            <div className='div-details'>
            <img src={NikeblackgreenShoe} alt="" />
                <p className='first-letter'>Nike Running Shoe</p>
                <p className='second-letter'>N95,765</p>
            </div>
        </div>
       </div>
        <div className='div-two'>
               <img src={NikeredblackShoe} alt="" />
                <p className='first-letter'>Nike Running Shoe</p>
                <p  className='second-letter'>N95,765</p>
        </div>
        </div>
    </div>
  )
}
