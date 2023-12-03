import React from 'react'
import Navbar from '../../layout/Navbar'
import "./style.scss"
import ProjectsDetailsHeader from './ProjectsDetailsHeader'
import LavanderAmbient from '../../Components/LavanderAmbient'
function ProjectDetailsPage() {
  return (
    <section id='projectDetailsPage'>
      <header>
        <Navbar />
        <ProjectsDetailsHeader />
      </header>
      <main>
        <LavanderAmbient />
      </main>
    </section>
  )
}

export default ProjectDetailsPage