// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const AllCourses = () => {
//     const courses = [
//         {
//             id: 1,
//             image: '/upload/xcourse_01.png.pagespeed.ic.XTOvCuUmZu.png',
//             title: 'MEARL DATA SCIENCE (MDS)',
//             link: '/course/meal-data-science',
//             students: '29 Students',
//             rating: 5,
//         },
//         {
//             id: 2,
//             image: '/upload/xcourse_02.png.pagespeed.ic.PL7Wu2UcSB.png',
//             title: 'BUSINESS & MARKET DATA SCIENCE (BMD)',
//             link: '/course/business-market',
//             students: '29 Students',
//             rating: 4.5,
//         },
//         {
//             id: 3,
//             image: '/upload/xcourse_03.png.pagespeed.ic.8e1MyY5M7i.png',
//             title: 'SCHOLARS DATA SCIENCE (SDC)',
//             link: '/course/scholar-science',
//             students: '13 Students',
//             rating: 4,
//         },
//         {
//             id: 4,
//             image: '/upload/xcourse_09.png.pagespeed.ic.onaUPvr7s-.png',
//             title: 'SCHOLARS DATA SCIENCE (SDC)',
//             link: '/course/scholar-data',
//             students: '20 Students',
//             rating: 5,
//         },
//         {
//             id: 5,
//             image: '/upload/xcourse_05.png.pagespeed.ic.mrKpzOf8LX.png',
//             title: 'INTRODUCTION TO STATISTICAL SOFTWARES (SPSS, R, or Python)',
//             link: '/course/statistic',
//             students: '18 Students',
//             rating: 4.5,
//         },
//         {
//             id: 6,
//             image: '/upload/xcourse_06.png.pagespeed.ic.2iR1Lq1HrU.png',
//             title: 'BASIC DATA VISUALIZATION TECHNIQUES AND TOOLS (e.g., Excel, Tableau)',
//             link: '/course/data-visualisation',
//             students: '22 Students',
//             rating: 4,
//         },
//         {
//             id: 7,
//             image: '/upload/xcourse_07.png.pagespeed.ic.KNvblD_Vd1.png',
//             title: 'ADVANCED DATA VISUALIZATION TECHNIQUES (TABLEAU, POWER BI, GGPLOT2)',
//             link: '/course/advance-data',
//             students: '12 Students',
//             rating: 5,
//         },
//         {
//             id: 8,
//             image: '/upload/xcourse_08.png.pagespeed.ic.uuUPd8pkHT.png',
//             title: 'MEASURING AND ENHANCING RESEARCH IMPACT (H-INDEX, CITATION METRICS)',
//             link: '/course/measure-enhancing',
//             students: '44 Students',
//             rating: 4.5,
//         },
//     ];

//     const StarRating = ({ rating }: { rating: number }) => {
//         return (
//             <div className="flex items-center gap-0.5 text-yellow-400">
//                 {[1, 2, 3, 4, 5].map((star) => {
//                     if (rating >= star) {
//                         return <FaStar key={star} size={16} />;
//                     } else if (rating + 0.5 >= star) {
//                         return <FaStarHalfAlt key={star} size={16} />;
//                     } else {
//                         return <FaStar key={star} size={16} className="text-gray-300" />;
//                     }
//                 })}
//             </div>
//         );
//     };

//     return (
//         <div className="max-w-7xl mx-auto py-20 px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {courses.map((course) => (
//                     <div
//                         key={course.id}
//                         className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
//                     >
//                         {/* Image Container */}
//                         <div className="relative aspect-[16/10] overflow-hidden">
//                             <Image
//                                 src={course.image}
//                                 alt={course.title}
//                                 fill
//                                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//                                 priority={course.id <= 4}
//                             />

//                             {/* Shopping Cart - Hover Effect */}
//                             <Link
//                                 href="/cart"
//                                 className="absolute top-4 right-4 bg-white text-[var(--orange)] p-3 rounded-full shadow-md 
//                                            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
//                                            transition-all duration-300 hover:bg-[var(--blue)] hover:text-white"
//                                 aria-label="Add to cart"
//                             >
//                                 <FaShoppingCart size={20} />
//                             </Link>
//                         </div>

//                         {/* Content */}
//                         <div className="p-5 flex-1 flex flex-col">
//                             <Link
//                                 href={course.link}
//                                 className="font-bold text-[15px] text-[var(--blue)] leading-tight hover:text-blue-700 transition-colors line-clamp-3 mb-3"
//                             >
//                                 {course.title}
//                             </Link>
//                              <div className="flex items-center px-0 justify-between">
//                                 {/* Students */}
//                             <p className="text-sm text-gray-600">
//                                 {course.students}
//                             </p>
//                             {/* Rating */}
//                             <div className="flex items-center gap-2 ">
//                                 <StarRating rating={course.rating} />
//                                 <span className="text-sm text-gray-500">({course.rating})</span>
//                             </div>
//                              </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllCourses;


'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  Target 
} from 'lucide-react';

const programmes = [
  {
    id: 'diploma',
    title: "Diploma in Research & Learning",
    acronym: "Dip.RL",
    description: "Build strong foundations in research methodology, academic writing, and data literacy.",
    duration: "6 Months",
    level: "Level 1",
    image: "/images/diploma.jpg",           // ← Change to your image
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
    title: "Course 5 – Specialist Tracks",
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
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--blue)] tracking-tight mb-4">
            ICORDS Programme Catalogue
          </h2>
          <p className="text-sm md:text-md lg:text-md text-[var(--blue)] max-w-2xl mx-auto">
            Choose your path. From foundational learning to doctoral research and specialist expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {programmes.map((prog, index) => (
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
                  <div className={`h-2 w-full bg-gradient-to-r ${prog.color}`} />

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
                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-[var(--blue)] mb-3 leading-tight">
                      {prog.title}
                    </h3>

                    <p className="text-[var(--white)] leading-relaxed mb-8 flex-1 text-[16px] md:text-[20px] lg:text-[24px]">
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
                      <div className="mb-8 p-5 bg-[var(--orange)] rounded-2xl border border-[var(--orange)]/90 text-center">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeCatalogue;


