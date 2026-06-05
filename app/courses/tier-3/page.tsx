import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import Tier3Header from '@/components/Tier3Header'
import Tier3OrganisationDatabase from '@/components/Tier3OrganisationDatabase'
import Tier3QuickNavigation from '@/components/Tier3QuickNavigation'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <Tier3Header/>
        <Tier3QuickNavigation/>
        <Tier3OrganisationDatabase/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page