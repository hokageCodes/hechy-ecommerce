import React from 'react'
import "./exploresection.css"
import BlackwhiteShoe from "../../../assets/blackwhiteshoe.png"
import YellowShoe from "../../../assets/yellowshoe.png"
export default function 
() {
  return (
    <div id='explore'>
      <div className='explore-one'>
        <h1>Explore New Collections</h1>
        <img src={BlackwhiteShoe} alt="" />
      </div>
      <div className='explore-two'>
        <img src={YellowShoe} alt="" />
        <p>Explore new options. Experience fresh styles, designs perfect for updating your wardrobe with quality kicks.</p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}
