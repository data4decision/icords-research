"use client"

import React from 'react'
import {FaStar} from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  Target 
} from 'lucide-react';

const OurCourses = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const programmes = [
  {
    id: 'diploma',
    title: "Diploma in Research & Learning",
    acronym: "Dip.RL",
    description: "Build strong foundations in research methodology, academic writing, and data literacy.",
    duration: "6 Months",
    level: "Level 1",
    image: "/images/diploma.jpg",           // ← Change to your image
    badgeColor: "bg-[var(--blue)]",
    href: "/courses/tier-1",
    icon: BookOpen,
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 'master',
    title: "Master of Research & Learning",
    acronym: "M.RL",
    description: "Advanced research training with deep focus on methodology and data analysis.",
    duration: "12 Months",
    level: "Level 2",
    image: "/images/master.jpg",
    badgeColor: "bg-[var(--blue)]",
    href: "/courses/tier-2",
    icon: GraduationCap,
    color: "from-violet-600 to-purple-700",
  },
  {
    id: 'doctorate',
    title: "Doctor of Research & Learning",
    acronym: "D.RL",
    description: "Highest level of research expertise. Contribute original knowledge to your field.",
    duration: "24–36 Months",
    level: "Level 3",
    image: "/images/doctorate.jpg",
    badgeColor: "bg-[var(--blue)]",
    href: "/courses/tier-3",
    icon: Award,
    color: "from-amber-600 to-orange-700",
  },
  {
    id: 'specialist',
    title: "Course 5 – Specialist Tracks",
    acronym: "C5",
    description: "11 focused software & tool-specific tracks for practical, job-ready skills.",
    duration: "8 Weeks per track",
    level: "Ordinary & Associate",
    image: "/images/specialist.jpg",
    badgeColor: "bg-[var(--blue)]",
    href: "/courses/course5",
    icon: Target,
    color: "from-[var(--orange)] to-[var(--orange)]/70",
    isSpecialist: true,
  },
];


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

      <div className="slider-container max-w-7xl mx-auto px-4 py-10">

        <Slider {...settings}>

         
            {programmes.map((prog, index) => (
              <div key={prog.id} className="px-3">
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative h-full"
            >
              <Link href={prog.href} className="block h-full">
                <div 
  className="relative h-full rounded-3xl overflow-hidden shadow-lg border border-[var(--blue)]/20 
             hover:shadow-2xl transition-all duration-500 flex flex-col"
  style={{
    backgroundImage: `url(${prog.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/65" />
                  {/* Gradient Top Accent */}
                  {/* <div className={`h-2 w-full bg-gradient-to-r ${prog.color}`} /> */}

                  {/* Icon & Badge */}
                  <div className="flex justify-between items-start p-8 pb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <prog.icon className="w-12 h-12 text-[var(--blue)]" strokeWidth={2.5} />
                    </motion.div>

                    <span className={`px-4 py-1.5 text-xs font-bold text-[var(--orange)] rounded-full ${prog.badgeColor}`}>
                      {prog.acronym}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-2 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-[var(--blue)] mb-3 leading-tight">
                      {prog.title}
                    </h3>

                    <p className="text-[var(--white)] leading-relaxed mb-3 flex-1 text-[16px] md:text-[20px] lg:text-[24px]">
                      {prog.description}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-3 mb-10">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-px bg-[var(--orange)]" />
                        <span className="font-medium text-[var(--blue)]">Duration</span>
                        <span className="font-semibold text-[var(--blue)]">{prog.duration}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-px bg-[var(--orange)]" />
                        <span className="font-medium text-[var(--blue)]">Tier</span>
                        <span className="font-semibold text-[var(--blue)]">{prog.level}</span>
                      </div>
                    </div>

                    {/* Specialist Extra Info */}
                    {prog.isSpecialist && (
                      <div className="mb-1 p-2 bg-[var(--orange)] rounded-2xl border border-[var(--orange)]/90 text-center">
                        <p className="text-[var(--white)] text-sm font-medium mb-3">
                          11 Specialist Tracks Available
                        </p>
                        <div className="flex flex-wrap gap-1 text-[10px] font-mono text-[var(--blue)]">
                          {['SPSS', 'Excel', 'R', 'STATA', 'NVivo', 'Power BI', 'Tableau', 'AI', 'KoboToolbox', 'DHIS2', 'GIS'].map(tool => (
                            <span key={tool} className="bg-white px-2 py-0.5 rounded border border-[var(--blue)]/20">
                              {tool}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-[var(--blue)] mt-3">Ordinary &amp; Associate Levels • Specialist Certificate</p>
                      </div>
                    )}

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-auto w-full py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl 
                                 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Explore Programme
                      <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                  </div>

                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent 
                                group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:via-violet-400 group-hover:to-emerald-400 
                                transition-all duration-500 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
            </div>
          ))}
      
        </Slider>

      </div>

    </div>
  )
}

export default OurCourses