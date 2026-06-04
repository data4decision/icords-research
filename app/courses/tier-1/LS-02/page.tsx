import Footer from '@/components/Footer'
import Los2Tier1Header from '@/components/Los2Tier1Header'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import OrganisationDataBaseTwo from '@/components/OrganisationDataBaseTwo'
import QuickNavigation from '@/components/QuickNavigation'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <Los2Tier1Header/>
      <QuickNavigation/>
      <OrganisationDataBaseTwo/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default page