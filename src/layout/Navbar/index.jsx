import React from 'react'
import { NavLink } from "react-router-dom";
import './style.scss'
import ResponsiveNav from '../ResponsiveNav';

function Navbar() {
  return (
    <>
      <nav>
        <div className="navTop">
          <div className="navTopCont">
            <div className="leftSide">
              <ul>
                <li>Visit Us</li>
                <li>Online Support</li></ul>
            </div>
            <div className="rightSide">
              <ul>
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-github"></i></li>
                <li><i class="fa-brands fa-discord"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navBot">
          <div className="navLogo">
            <NavLink to={"/"}> <img src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" alt="" /></NavLink>
          </div>
          <div className="links">
            <div className='NavLinks'><NavLink to={"/"}>HOME</NavLink></div>
            <div className='NavLinks'><NavLink to={"/aboutPage/"}>ABOUT</NavLink></div>
            <div className='NavLinks linkWithDropDown'>PAGES
              <div className="dropDown">
                <ul className='dropDownsUl'>
                  <li className='secondLink'><NavLink to={"/projectPage/"}>PROJECT</NavLink></li>
                  <li className='secondLink'><NavLink to={"/projectDetailsPage/"}>PROJECT DETAILS</NavLink></li>
                  <li className='last_li'>ELEMENTS</li>
                </ul>
              </div>
            </div>
            <div className='NavLinks linkWithDropDown'>BLOG
              <div className="dropDown">
                <ul className='dropDownsUl'>
                  <li>BLOG</li>
                  <li className='last_li'>BLOG DETAILS</li>
                </ul>
              </div>
            </div>
            <div className='NavLinks '><NavLink to={"/contactPage/"}>CONTACT</NavLink></div>
          </div>
        </div>

      </nav >
      <ResponsiveNav />
    </>
  )
}

export default Navbar