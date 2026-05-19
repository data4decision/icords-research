import ClientSection from '@/components/ClientSection'
import ConsultancySection from '@/components/ConsultancySection'
import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Serviceshero from '@/components/Serviceshero'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <Serviceshero/>
        <Services/>
        <ConsultancySection/>
        <ClientSection/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page