import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'



const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
       <About/>
       <Experience/>
       <Footer/>
    </div>
  )
}

export default page