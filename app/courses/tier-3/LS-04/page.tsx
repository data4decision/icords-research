import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import Tier3Header3 from '@/components/Tier3Header2'
import Tier3OrganisationDatabase4 from '@/components/Tier3OrganisationDatabase4'
import Tier3QuickNavigation from '@/components/Tier3QuickNavigation'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <Tier3Header3/>
        <Tier3QuickNavigation/>
        <Tier3OrganisationDatabase4/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page