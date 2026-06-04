import Footer from '@/components/Footer'
import Los4Tier1Header from '@/components/Los4Tier1Header'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import OrganizationDataBaseFour from '@/components/OrganisationDatabaseFour'
import QuickNavigation from '@/components/QuickNavigation'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <Los4Tier1Header/>
        <QuickNavigation/>
        <OrganizationDataBaseFour/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page