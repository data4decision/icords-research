import Footer from '@/components/Footer'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import OrganisationDatabaseTier2L4 from '@/components/OrganisationDatabaseTier2L4'
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
        <OrganisationDatabaseTier2L4/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page