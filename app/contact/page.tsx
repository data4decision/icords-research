import ContactHeader from '@/components/ContactHeader'
import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <ContactHeader/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page