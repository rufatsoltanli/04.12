import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"

function ContactHeader() {
    return (
        <div className="contactHeaderCont">
            <div className="text"><h1>CONTACT</h1>
                <div className="links">
                    <NavLink to={"/"}>Home </NavLink> <i class="fa-solid fa-arrow-right"> </i><NavLink to={"/contactPage/"} > Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ContactHeader