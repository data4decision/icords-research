import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopNavbar from './components/TopNavbar'
import OurCourses from './components/OurCourses'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div>
      <TopNavbar/>
        <Navbar/>
        <HeroSection/>
        <OurCourses/>
        <WhyChooseUs/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default LandingPage