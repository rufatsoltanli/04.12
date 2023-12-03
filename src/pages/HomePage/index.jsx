import React from 'react'
import Navbar from '../../layout/Navbar'
import "./style.scss"
import MostPopularFurniture from '../../Components/MostPopularFurniture'
import AlexComplex from '../../Components/AlexComplex'
import SomeFeatures from '../../Components/SomeFeatures'
import LookingForAQuality from '../../Components/LookingForAQuality'
import RecentPost from '../../Components/RecentPost'
import Labels from '../../Components/Labels'
import HomePageHeader from './HomePageHeader'

function HomePage() {
  return (
    <section id='homePage'>
      <header>
        <Navbar />
        <HomePageHeader />
      </header>
      <main>
        <MostPopularFurniture />
        <AlexComplex />
        <SomeFeatures />
        <LookingForAQuality />
        <RecentPost />
        <Labels/>
      </main>
    </section>
  )
}

export default HomePage