import AllCourses from '@/components/AllCourses'
import AllCoursesHeader from '@/components/AllCoursesHeader'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <AllCoursesHeader/>
        <AllCourses/>
        <Footer/>
    </div>
  )
}

export default page