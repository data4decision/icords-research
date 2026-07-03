'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const programmes = [ {
    id: 'diploma',
    title: "Diploma in Research & Learning",
    acronym: "Dip.RL",
    description: "Build strong foundations in research methodology, academic writing, and data literacy.",
    duration: "6 Months",
    level: "Level 1",
    image: "/images/diploma.jpg",
    badgeColor: "bg-blue-600",
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
    badgeColor: "bg-violet-600",
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
    badgeColor: "bg-amber-600",
    href: "/courses/tier-3",
    icon: Award,
    color: "from-amber-600 to-orange-700",
  },
  {
    id: 'specialist',
    title: "Software Application ",
    acronym: "C5",
    description: "11 focused software & tool-specific tracks for practical, job-ready skills.",
    duration: "8 Weeks per track",
    level: "Ordinary & Associate",
    image: "/images/specialist.jpg",
    badgeColor: "bg-emerald-600",
    href: "/courses/course5",
    icon: Target,
    color: "from-emerald-600 to-teal-700",
    isSpecialist: true,
  },
 ];

const ProgrammeCatalogue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = programmes.length - itemsPerView;
  const slideWidth = 100 / itemsPerView;

  const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blue)] tracking-tight mb-4">
            ICORDS Programme Catalogue
          </h2>
          <p className="text-base md:text-lg text-[var(--blue)]/90 max-w-2xl mx-auto">
            Choose your path. From foundational learning to doctoral research and specialist expertise.
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-2 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 hidden sm:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-2 sm:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 hidden sm:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-1 sm:gap-3 lg:gap-6"
              animate={{ 
                x: `-${currentIndex * (100 / itemsPerView)}%` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 40,
                bounce: 0 
              }}
            >
              {programmes.map((prog, index) => (
                <div
                  key={prog.id}
                  className="flex-shrink-0 w-[99.3%] sm:w-[calc(49%-3px)] lg:w-[calc(32%-6px)]"
                  style={{
                    // This helps with precise alignment
                    scrollSnapAlign: itemsPerView === 1 ? 'center' : 'start'
                  }}
                >
                  <Link href={prog.href} className="block h-full">
                    <div className="relative h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-lg border border-[var(--blue)]/20 hover:shadow-2xl transition-all duration-500 flex flex-col group"
                      style={{
                        backgroundImage: `url(${prog.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

                      <div className={`h-2.5 w-full bg-gradient-to-r ${prog.color}`} />

                      <div className="flex justify-between items-start p-6 sm:p-8 pb-4 relative z-10">
                        <motion.div whileHover={{ rotate: 12, scale: 1.1 }}>
                          <prog.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                        </motion.div>

                        <span className={`px-5 py-2 text-sm font-bold text-white rounded-full ${prog.badgeColor} shadow`}>
                          {prog.acronym}
                        </span>
                      </div>

                      <div className="px-6 sm:px-8 pb-8 flex-1 flex flex-col relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-5">
                          {prog.title}
                        </h3>

                        <p className="text-white/95 text-base sm:text-[17px] leading-relaxed mb-8 flex-1">
                          {prog.description}
                        </p>

                        {/* Meta Info */}
                        <div className="space-y-4 mb-10 text-base">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-px bg-[var(--orange)]" />
                            <span className="text-white/80">Duration</span>
                            <span className="font-semibold text-white">{prog.duration}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-px bg-[var(--orange)]" />
                            <span className="text-white/80">Tier</span>
                            <span className="font-semibold text-white">{prog.level}</span>
                          </div>
                        </div>

                        {prog.isSpecialist && (
                          <div className="mb-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                            <p className="text-white text-sm font-medium mb-4">11 Software Applications Available</p>
                            <div className="flex flex-wrap gap-2 justify-center text-xs font-mono">
                              {['SPSS', 'Excel', 'R', 'STATA', 'NVivo', 'Power BI', 'Tableau', 'AI', 'KoboToolbox', 'DHIS2', 'GIS'].map(tool => (
                                <span key={tool} className="bg-white/90 text-[var(--blue)] px-3 py-1 rounded">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="mt-auto w-full py-4 bg-white hover:bg-[var(--orange)] hover:text-white text-gray-900 font-semibold rounded-2xl transition-all text-base"
                        >
                          Explore Programme →
                        </motion.button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[var(--blue)] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeCatalogue;