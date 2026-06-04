import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import Tier2Header from '@/components/Tier2Header'
import Tier2QuickNavigation from '@/components/Tier2QuickNavigation'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <Tier2Header/>
        <Tier2QuickNavigation/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page