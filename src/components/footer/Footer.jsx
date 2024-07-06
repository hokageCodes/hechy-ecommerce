import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { CgCopyright } from 'react-icons/cg'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa"
import "./footer.css"


export default function Footer() {
  return (
    <footer>
      <ul className='footerlist'>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Press</a></li>
        <li><a href="">Accessibility</a></li>
        <li><a href="">Partners</a></li>
      </ul>
      <ul className='iconslist'>
        <li><a href=""><FaFacebook/></a></li>
        <li><a href=""><BsTwitter/></a></li>
        <li><a href=""><FaInstagram/></a></li>
        <li><a href=""><BsGithub/></a></li>
      </ul>
      <p><span><CgCopyright/></span>2020 Dlex,Inc. All rights reserved</p>
    </footer>
  )
}
