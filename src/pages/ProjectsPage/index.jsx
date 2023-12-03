import React from 'react'
import Navbar from '../../layout/Navbar'
import "./style.scss"
import ProjectHeader from './ProjectHeader'
import AlexComplex from '../../Components/AlexComplex'
function ProjectsPage() {
  return (
    <section id='projectPage'>
      <header>
        <Navbar />
        <ProjectHeader />
      </header>
      <main>
        <div className="latestCopletedProject">
          <h1>LATEST COMPLETED PROJECTS
          </h1>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
        </div>
        <AlexComplex />
      </main>
    </section>
  )
}

export default ProjectsPage