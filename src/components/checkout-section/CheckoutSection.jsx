import React from 'react'
import "./checkoutsection.css";
import NikerunShoe from "../../assets/imgs/nikerunshoe.png"
import FineblackShoe from "../../assets/imgs/fineblackshoe.png"
import FineorangeShoe from "../../assets/imgs/fineorangeshoe.png"
import Delete from "../../assets/imgs/delete.png"

// export default function CheckoutPage() {
//   return (
//     <div>
//         <h1>Checkout</h1>
//       <div className='ship'>
//       <div>
//             <h3>Shipping details</h3>
//             <div className='ship-details'>
//             <div>
//                 <h3>Hechy Bethel</h3>
//                 <p>61, Christ the King street, Amuwo odofin</p>
//             </div>
//             <p>ihechibethel5@gmail.com</p>
//             </div>
//             <form action="">
//                 <p className='payment'>Payment details</p><br />
//                 <label htmlFor="" className='label-one'>Name on Card</label><br />
//                 <input type="text" placeholder='hechy'className='input-one' /><br />
//                 <label htmlFor="" className='label-one'>Card Number</label><br />
//                 <input type="text" placeholder='2345 8678'className='input-one'/>
//                 <div className='card-details'>
//                 <div>
//                     <label htmlFor="" className='label-two'>Exp.date</label><br />
//                     <input type="text" placeholder='24/06'className='input-two' /><br />
//                 </div>
//                 <div>
//                 <label htmlFor="" className='label-two'>CVV</label><br />
//                 <input type="text" placeholder='345'className='input-two'/>
//                 </div>
//                 </div>
//                 <button className='check-btn'>Checkout (750,000)</button>
//             </form>
//         </div>
//         <div>
//             <h3>Order</h3>
//             <div className='order-div'>
//                 <img src={NikerunShoe} className='order-img' alt="" />
//                 <div className='order-details'>
//                     <h3>Timbu Performance Shoes</h3>
//                     <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
//                     <p>In stock</p>
//                     <h3>90,430</h3>
//                     <span><img src={Delete} alt="" />Remove</span>
//                 </div>
//             </div>
//             <div className='order-div'>
//                 <img src={FineorangeShoe}className='order-img' alt="" />
//                 <div className='order-details'>
//                     <h3>Timbu Performance Shoes</h3>
//                     <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
//                     <p>In stock</p>
//                     <h3>90,430</h3>
//                     <span><img src={Delete} alt="" />Remove</span>
//                 </div>
//             </div>
//             <div className='order-div'>
//                 <img src={FineblackShoe} className='order-img' alt="" />
//                 <div className='order-details'>
//                     <h3>Timbu Performance Shoes</h3>
//                     <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
//                     <p>In stock</p>
//                     <h3>90,430</h3>
//                     <span><img src={Delete} alt="" />Remove</span>
//                 </div>
//             </div>

//         </div>
       
//       </div>
//     </div>
//   )
// }
export default function CheckoutPage() {
    return (
      <div>
        <h1>Checkout</h1>
        <div className='ship'>
          <div>
            <h3>Shipping details</h3>
            <div className='ship-details'>
              <div>
                <h3>Hechy Bethel</h3>
                <p>61, Christ the King street, Amuwo odofin</p>
              </div>
              <p>ihechibethel5@gmail.com</p>
            </div>
            <form action="">
              <p className='payment'>Payment details</p><br />
              <label htmlFor="" className='label-one'>Name on Card</label><br />
              <input type="text" placeholder='hechy' className='input-one' /><br />
              <label htmlFor="" className='label-one'>Card Number</label><br />
              <input type="text" placeholder='2345 8678' className='input-one' />
              <div className='card-details'>
                <div>
                  <label htmlFor="" className='label-two'>Exp.date</label><br />
                  <input type="text" placeholder='24/06' className='input-two' /><br />
                </div>
                <div>
                  <label htmlFor="" className='label-two'>CVV</label><br />
                  <input type="text" placeholder='345' className='input-two' />
                </div>
              </div>
              <a href="/checkoutpage"><button className='check-btn'>Checkout (750,000)</button></a>
            </form>
          </div>
          <div>
            <h3>Order</h3>
            <div className='order-div'>
              <img src={NikerunShoe} className='order-img' alt="" />
              <div className='order-details'>
                <h3>Timbu Performance Shoes</h3>
                <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                <p>In stock</p>
                <h3>90,430</h3>
                <span><img src={Delete} alt="" />Remove</span>
              </div>
            </div>
            <div className='order-div'>
              <img src={FineorangeShoe} className='order-img' alt="" />
              <div className='order-details'>
                <h3>Timbu Performance Shoes</h3>
                <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                <p>In stock</p>
                <h3>90,430</h3>
                <span><img src={Delete} alt="" />Remove</span>
              </div>
            </div>
            <div className='order-div'>
              <img src={FineblackShoe} className='order-img' alt="" />
              <div className='order-details'>
                <h3>Timbu Performance Shoes</h3>
                <p>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                <p>In stock</p>
                <h3>90,430</h3>
                <span><img src={Delete} alt="" />Remove</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
