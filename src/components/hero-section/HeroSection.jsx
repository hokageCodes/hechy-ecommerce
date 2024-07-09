import React from 'react'
import "./herosection.css";
import CheckIcon from "../../assets/imgs/check.png"
import PumaIcon from "../../assets/imgs/puma.png"
import NikeIcon from "../../assets/imgs/nike.png"
import BalenciagaIcon from "../../assets/imgs/balenciaga.png"
import BigShoe from "../../assets/imgs/bigshoe.png"

export default function HeroSection() {
  return (
    <div>
      <div id='hero'>
      <div className='timbu'>
        <div>
        <img src={CheckIcon} alt="" />
        <p>Timbu Cloud Shop</p>
        </div>
        <h1>Timbu Shoe Bank</h1>
        <p>Discover our stylish and comfortable shoes, perfect for every occasion and need</p>
        <button className='btnone'>
        <img src={BalenciagaIcon} alt="" />
        <img src={PumaIcon} alt="" />
        <img src={NikeIcon} alt="" />
        <span> 100+ Brands</span>
        </button>
        <button className='btntwo'>Shop Now</button>
      </div>
      <div className='timbuimg'>
      <img src ={BigShoe} alt=""/>
      </div>
      
    </div>
    <div id='herotexts'>
     <ul>
      <li className='bigtext'>2000+</li>
      <li className='smalltext'>unique styles</li>
     </ul>
     <ul>
      <li className='bigtext'>5000+</li>
      <li className='smalltext'>Happy Customers</li>
     </ul>
     <ul>
      <li className='bigtext'>300+</li>
      <li className='smalltext'>Outlets</li>
     </ul>
    </div>
    </div>
  )
}
