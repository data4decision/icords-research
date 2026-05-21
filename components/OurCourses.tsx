"use client"

import React from 'react'
import {FaStar} from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image';
import Link from 'next/link';

const OurCourses = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } }
    ]
  }

  const courses = [
    {
        id: 1,
        image: "/upload/course1.png", 
        title: "COME BACK LATER", 
        text: "Come back later for more interesting courses, you can contact us based on your interest on research and data analyses",
        price: "$0.00",
        icon: 'FaStar',
        link: "/login"
    },
    {
        id: 2,
        image: "/upload/xcourse_01.png.pagespeed.ic.XTOvCuUmZu.png", 
        title: "COME BACK LATER", 
        text: "Come back later for more interesting courses, you can contact us based on your interest on research and data analyses",
        price: "$0.00",
        icon: 'FaStar',
        link: "/login"
    },
    {
        id: 3,
        image: "/upload/xcourse_02.png.pagespeed.ic.PL7Wu2UcSB.png", 
        title: "COME BACK LATER", 
        text: "Come back later for more interesting courses, you can contact us based on your interest on research and data analyses",
        price: "$0.00",
        icon: 'FaStar',
        link: "/login"
    },
    {
        id: 4,
        image: "/upload/xcourse_02.png.pagespeed.ic.PL7Wu2UcSB.png", 
        title: "COME BACK LATER", 
        text: "Come back later for more interesting courses, you can contact us based on your interest on research and data analyses",
        price: "$0.00",
        icon: 'FaStar',
        link: "/login"
    },
    {
        id: 5,
        image: "/upload/xcourse_02.png.pagespeed.ic.PL7Wu2UcSB.png", 
        title: "COME BACK LATER", 
        text: "Come back later for more interesting courses, you can contact us based on your interest on research and data analyses",
        price: "$0.00",
        icon: 'FaStar',
        link: "/login"
    },
  ]

  return (
    <div className='hidden lg:block'>

      <div className="text-center sm:py-25 py-10  ">
        <h1 className='md:text-3xl text-xl text-[var(--gray)] font-bold'>
          Our Courses
        </h1>

        <p className='md:text-xl text-sm text-[var(--gray)]/50'>
          Listed Below Courses Element
        </p>
      </div>

      <div className="slider-container max-w-7xl mx-auto px-4 ">

        <Slider {...settings}>

         
            {courses.map((course) => (
                <div key={course.id} className="px-3 pb-8">
                <div className="flex flex-col gap-4   shadow-lg overflow-hidden border-blur-2xl bg-[var(--gray)]/5">
                    <div className="relative h-56">
                        <Image
                        src={course.image}
                        alt={course.title}
                        width={200}
                        height={300}
                        priority
                        className='object-cover w-full'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                        <h2 className='font-bold sm:text-[18px] text-[15px] px-5'>{course.title}</h2>
                        <p className='sm:text-[15px] text-[12px] px-5'>{course.text}</p>
                    </div>
                    <div className="flex items-center justify-between px-5">
                        <div className="flex text-amber-300">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <div className="">{course.price}</div>
                    </div>
                    </div>
                    <Link href={course.link} 
                    className="bg-[var(--lightblue)] hover:bg-[var(--lightblue)]/80 hover:text-[var(--white)] px-3 py-1 text-center transition-all ease-in-out duration-300 ">Enroll Now</Link>
                    </div>
                </div>

            ))}
         

        </Slider>

      </div>

    </div>
  )
}

export default OurCourses