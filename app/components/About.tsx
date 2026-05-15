'use client'
import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const About = () => {
    const [selectValue, setSelectValue] = useState("mission")

    // Custom Arrow Components
  const PrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <FaChevronLeft size={20} />
      </button>
    )
  }

  const NextArrow = (props: any) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <FaChevronRight size={20} />
      </button>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,           
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768,  settings: { slidesToShow: 1 } },
    ]
  }

  const gallery = [
    {
      id: 1,
      image: "/upload/xabout_01.jpg.pagespeed.ic.kjNqMAPXcG.jpg",
      alt: "Gallery Image 1"
    },
    {
      id: 2,
      image: "/upload/xabout_02.jpg.pagespeed.ic.D36tpcmMNB.jpg",
      alt: "Gallery Image 2"
    },
  ]

  return (
    <div className="sm:py-25 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-15">

        {/* Left Side - Gallery */}
        <div className="flex flex-col">

          <div className="relative">
            <Slider {...settings}>
              {gallery.map((item) => (
                <div key={item.id} className="px-2">
                  <div className="relative sm:h-[400px] h-[200px] overflow-hidden ">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Right Side - Why Choose Us */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome to ICORDS-Research Institute.</h1>
            <hr className="w-12 mt-5 border-1 border-[var(--orange)]" />
          </div>

          {/* Section 2 */}

          <div className="space-y-6 text-gray-600">
                  
                <div className="">
                    <p className='sm:text-[17px] text-sm'>
                        A leading institution dedicated to advancing research, 
                        data science, and evidence-based decision-making across 
                        various sectors. We specialize in providing world-class 
                        consultancy, training, and certification programs designed 
                        to empower scholars, development experts, and business leaders 
                        with the tools they need to excel in an increasingly data-driven world. 
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                    <div className="flex flex-col gap-2 mt-4">
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Professional Teachers 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        24/7 Online Course 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Works with All Devices 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Friendly User Panel 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Support Desk for All Prices
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Lifetime Membership 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Online Chat with Support 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Second Course 50% Cheap 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        Limitless Bandwidth 
                        </p>
                        <p className='sm:text-[15px] text-[12px] flex gap-2 items-center'>
                        <FaChevronRight size={8}/>
                        And much more...
                        </p>
                    </div>
                </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About