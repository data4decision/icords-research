import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'




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