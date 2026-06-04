import Footer from '@/components/Footer'
import Los3Tier1Header from '@/components/Los3Tier1Header'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import OrganisationDataBaseThree from '@/components/OrganisationDataBaseThree'
import QuickNavigation from '@/components/QuickNavigation'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <Los3Tier1Header/>
      <QuickNavigation/>
      <OrganisationDataBaseThree/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default page