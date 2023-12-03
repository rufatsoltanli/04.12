import React from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";

function ProjectHeader() {
    return (
        <div className="projectPageHeaderCont">
            <div className="text">
                <h1>Projects</h1>
                <div className="links">
                    <NavLink to={"/"}>Home </NavLink> <i class="fa-solid fa-arrow-right"> </i><NavLink to={"/projectPage/"} > Project Page</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeader