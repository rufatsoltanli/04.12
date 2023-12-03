import React from 'react'
import Navbar from '../../layout/Navbar'
import "./style.scss"
import BrandNewApp from '../../Components/BrandNewApp'
import AlexComplex from '../../Components/AlexComplex'
import Labels from '../../Components/Labels'
import AboutHeader from './AboutHeader'

function AboutPage() {
  return (
    <section id='aboutPage'>
      <header id='aboutPageHeader'>
        <Navbar />
        <AboutHeader />
      </header>
      <main>
        <BrandNewApp />
        <AlexComplex />
        <Labels />
      </main>
    </section>
  )
}

export default AboutPage