import React from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";

function AboutHeader() {
    return (
        <div className="aboutPageHeaderCont">
            <div className="text"><h1>ABOUT US</h1>
                <div className="links">
                    <NavLink to={"/"}>Home </NavLink> <i class="fa-solid fa-arrow-right"> </i><NavLink to={"/aboutPage/"} > About</NavLink>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader