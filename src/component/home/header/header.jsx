import React, { useState } from 'react'
import logo from'../../../assets/logo.png'
import {Link }  from "react-router";
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
 

  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
      
    header.classList.toggle("active", window.scrollY > 200)
  })
  return (
    <>
    <header className='header'>
      <div className="container flex">
        <div className="logo">
          <img src={logo} alt="logo1" />
        </div>
        <div className="nav">
          <ul >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page">Pages</Link></li>
            <li><Link to="/blog"><a href="#about">About</a></Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li className='HeaderIcon'><SearchIcon/> </li>
            <li className='HeaderIcon'><GridViewIcon/></li>            
          </ul>
        </div>
          <button className="navbar-item-icon"><MenuIcon/></button>
      </div>
    </header>
    </>
  )
}

export default Header
