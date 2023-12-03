import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"
function ProjectsDetailsHeader() {
  return (
    <div className="projectsDetailsHeaderCont">
      <div className="text"><h1>Project Details</h1>
        <div className="links">
          <NavLink to={"/"}>Home </NavLink> <i class="fa-solid fa-arrow-right"> </i><NavLink to={"/projectPage/"} > Project Page</NavLink><i class="fa-solid fa-arrow-right"> </i><NavLink to={"/projectDetailsPage/"} > Project Details Page</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectsDetailsHeader