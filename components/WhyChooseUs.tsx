'use client'
import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const WhyChooseUs = () => {
    const [selectValue, setSelectValue] = useState("mission")

    // Custom Arrow Components
  const PrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[var(--blue)] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[var(--blue)] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
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
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side - Gallery */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="sm:text-2xl text-xl font-bold text-[var(--blue)]">From Our Gallery</h1>
            <hr className="w-12 mt-3 border-2 border-[var(--orange)]" />
          </div>

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
            <h1 className="text-2xl font-bold text-[var(--blue)]">Why Choose Us?</h1>
            <hr className="w-12 mt-3 border-2 border-[var(--orange)]" />
          </div>

          {/* Add your content here */}

          <div className="space-y-6 text-[var(--blue)] border-1 px-3 pb-15">
            <button 
                onClick={() => setSelectValue("mission")}
                className={`sm:px-6 px-2 sm:py-3 py-1 border text-sm sm:text-lg font-bold border-[var(--gray)] transition-all duration-200
                    ${selectValue === 'mission' 
                        ? 'bg-[var(--orange)] text-white border-[var(--blue)]' 
                        : 'bg-[var(--blue)] text-white hover:bg-[var(--orange)]'
                    }`}
            >
                Our Mission
            </button>
                        <button 
                onClick={() => setSelectValue("vission")}
                className={`sm:px-6 px-2 sm:py-3 py-1 border text-sm sm:text-lg font-bold border-[var(--gray)] transition-all duration-200
                    ${selectValue === 'vission' 
                        ? 'bg-[var(--orange)] text-white border-[var(--blue)]' 
                        : 'bg-[var(--blue)] text-white hover:bg-[var(--orange)]'
                    }`}
            >
                Our Vision
            </button>
                        <button 
                onClick={() => setSelectValue("goal")}
                className={`sm:px-6 px-2 sm:py-3 py-1 border text-sm sm:text-lg font-bold border-[var(--gray)] transition-all duration-200
                    ${selectValue === 'goal' 
                        ? 'bg-[var(--orange)] text-white border-[var(--blue)]' 
                        : 'bg-[var(--blue)] text-white hover:bg-[var(--orange)]'
                    }`}
            >
                Our Gaol
            </button>
            {selectValue === 'mission' && (
                <div className="">
                    <p className='sm:text-[15px] text-[12px]'>The International College of Research and Data Science (ICORDS) 
                        is a leading institution dedicated to advancing research, data science, 
                        and evidence-based decision-making across various sectors. 
                        We specialize in providing world-class consultancy, training, 
                        and certification programs designed to empower scholars, development experts, 
                        and business leaders with the tools they need to excel
                         in an increasingly data-driven world. 
                         Our team is made up of highly qualified experts with PhD and Master's 
                         Degrees from diverse disciplines, bringing together theoretical expertise and 
                         practical experience from renowned academic institutions, research organizations, 
                         and industries. We work across multiple sectors including agriculture, health, education, 
                         environmental development, and policy formulation, ensuring that our clients receive 
                         cutting-edge, actionable insights tailored to their specific needs. </p>
                </div>
            )}

            {/* Vission */}
            {selectValue === 'vission' && (
            <p className='sm:text-[15px] text-[12px]'>
                At ICORDS, we are dedicated to fostering knowledge, 
                innovation, and sustainability by empowering individuals 
                and organizations with data-driven solutions that meet the 
                challenges of the modern world. Our goal is to bridge the 
                gap between research, data science, and real-world applications, 
                ensuring that our clients are equipped to lead with confidence 
                and purpose. 
            </p>
            )}
            {/* Our Goal */}
            {selectValue === 'goal' && (
            <p className='sm:text-[15px] text-[12px]'>
                At ICORDS, we are dedicated to fostering knowledge, 
                innovation, and sustainability by empowering individuals 
                and organizations with data-driven solutions that meet the 
                challenges of the modern world. Our goal is to bridge the 
                gap between research, data science, and real-world applications, 
                ensuring that our clients are equipped to lead with confidence 
                and purpose.
            </p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs