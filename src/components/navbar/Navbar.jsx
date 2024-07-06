// import React from 'react'
// import "./navbar.css"
// import { CiSearch } from "react-icons/ci";
// import { BsCart } from "react-icons/bs";
// import { MdOutlinePersonOutline } from "react-icons/md";

// export default function Navbar() {
//   return (
//       <nav id='navbar'>
//         <p>ShoeBank</p>
//         <ul className='navlist'>
//           <li><a href="">Home</a></li>
//           <li><a href="">Shop</a></li>
//           <li><a href="">About</a></li>
//           <li><a href="">Blog</a></li>
//           <li><a href="">Contact</a></li>
//         </ul>
//         <ul className='navitems'>
//           <li><CiSearch/></li>
//           <li><BsCart/></li>
//           <li><MdOutlinePersonOutline/></li>
//         </ul>
//       </nav>
//   )
// }
import React, { useState } from 'react';
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav id='navbar'>
      <p>ShoeBank</p>
      <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <ul className='navitems'>
        <li><CiSearch/></li>
        <li><BsCart/></li>
        <li><MdOutlinePersonOutline/></li>
      </ul>
      <div className='hamburger' onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  )
}