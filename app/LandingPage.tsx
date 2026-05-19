import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/TopNavbar'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import OurCourses from '@/components/OurCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileOurCourses from '@/components/MobileOurCourses'
import Map from '@/components/Map'


const LandingPage = () => {
  return (
    <div>
      <TopNavbar/>
        <Navbar/>
        <HeroSection/>
        <OurCourses/>
        <MobileOurCourses/>
        <WhyChooseUs/>
        <Contact/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default LandingPage