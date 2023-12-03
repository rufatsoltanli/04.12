import React from 'react'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom'
import "./style.scss"

function ResponsiveNav() {

    function respNavDropDown() {
        document.querySelector(".navDropDown").classList.toggle("navDropDownVisible")

    }

    return (
        <nav id='responsiveNav'>
            <div className="resNavCont">
                <div className="navLogo">
                    <NavLink to={"/"}> <img src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp" alt="" /></NavLink>
                </div>
                <div className="navHamburger"><Hamburger onToggle={respNavDropDown} />
                    <div className="navDropDown">
                        <div className="links">
                            <div className='NavLinks'><NavLink to={"/"}>HOME</NavLink></div>
                            <div className='NavLinks'><NavLink>ABOUT</NavLink></div>
                            <div className='NavLinks linkWithDropDown'>PAGES
                                <div className="dropDown">
                                    <ul className='dropDownsUl'>
                                        <li>PROJECT</li>
                                        <li>PROJECT DETAILS</li>
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
                            <div className='NavLinks contact'>CONTACT</div>
                        </div>
                    </div></div>

            </div>
        </nav>
    )
}

export default ResponsiveNav