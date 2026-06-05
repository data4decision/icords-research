import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Tier3OrganisationDatabase2 from '@/components/Tier3OrganisationDatabase2'
import TopNavbar from '@/components/TopNavbar'
import Tier3QuicKNavigation from '@/components/Tier3QuickNavigation'
import Map from '@/components/Map'
import React from 'react'
import Tier3Header3 from '@/components/Tier3Header2'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <Tier3Header3/>
        <Tier3QuicKNavigation/>
        <Tier3OrganisationDatabase2/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page