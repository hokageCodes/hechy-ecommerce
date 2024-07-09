import React from 'react'
import "./cartsection.css";
import NikerunShoe from "../../assets/imgs/nikerunshoe.png"
import FineblackShoe from "../../assets/imgs/fineblackshoe.png"
import FineorangeShoe from "../../assets/imgs/fineorangeshoe.png"
import NikeswimShoe from "../../assets/imgs/nikeswimshoe.png"
import NikejogShoe from "../../assets/imgs/nikejogshoe.png"
import NiketrackShoe from "../../assets/imgs/niketrackshoe.png"
import Star from "../../assets/imgs/star.png"
import CartIcon from "../../assets/imgs/whitecart.png"
import Delete from "../../assets/imgs/delete.png"


export default function CartPage() {
    return (
      <div>
          <div className='cart'>
              <div>
              <div className='cart-one'>
                  <img src={NikerunShoe} alt="" />
                  <div className='cart-text'>
                      <h3>Timbu Sports performance shoes</h3>
                      <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                      <p>In stock</p>
                      <span className='delete'><img src={Delete} alt="" />Remove</span>
                  </div>
                  <h1>N90,310</h1>
              </div>
              <div className='cart-one'>
                  <img src={FineblackShoe} alt="" />
                  <div className='cart-text'>
                      <h3>Timbu Sports performance shoes</h3>
                      <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                      <p>In stock</p>
                      <span className='delete'><img src={Delete} alt="" />Remove</span>
                  </div>
                  <h1>N90,310</h1>
              </div>
              <div className='cart-one'>
                  <img src={FineorangeShoe} alt="" />
                  <div className='cart-text'>
                      <h3>Timbu Sports performance shoes</h3>
                      <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                      <p>In stock</p>
                      <span className='delete'><img src={Delete} alt="" />Remove</span>
                  </div>
                  <h1>N90,310</h1>
              </div>
              </div>
              
              <div>
                  <p>Cart summary</p>
                  <div className='cart-sum'>
                     <div>
                      <h3>Subtotal</h3>
                      <p>Delivery fee not included yet</p>
                      </div>
                      <h1>750,000</h1>
                  </div>
                  <button className='cart-btn'>Checkout (N751,000)</button>
                  <h3>Returns are easy</h3>
                  <p>Free returns within 7 days for all customers</p>
              </div>
            
          </div>
          <div id='products'>
        <h1>Related Products</h1>
        <div className='products-div'>
          <div className='products-one'>
            <img src={NikerunShoe} alt="" />
            <div>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <span className='reviews'>(5.8k Reviews)</span>
            </div>
            <p className='bigtext'>Nike Running Shoe</p>
            <div className='product-details'>
              <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span></p>
              <img src={CartIcon} className='icon' alt="" />
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
              <span className='reviews'>(5.8k Reviews)</span>
            </div>
            <p className='bigtext'>Nike Running Shoe</p>
            <div className='product-details'>
              <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span></p>
              <img src={CartIcon} className='icon' alt="" />
            </div>
          </div>
          <div className='products-one'>
            <img src={NikejogShoe} alt="" />
            <div>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <span className='reviews'>(5.8k Reviews)</span>
            </div>
            <p className='bigtext'>Nike Running Shoe</p>
            <div className='product-details'>
              <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span></p>
              <img src={CartIcon} className='icon' alt="" />
            </div>
          </div>
          <div className='products-one'>
            <img src={NiketrackShoe} alt="" />
            <div>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <span className='reviews'>(5.8k Reviews)</span>
            </div>
            <p className='bigtext'>Nike Running Shoe</p>
            <div className='product-details'>
              <p className='boldtext'>N959,765 <span className='smalltext'>4,430 sold</span></p>
              <img src={CartIcon} className='icon' alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  