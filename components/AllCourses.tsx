import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const AllCourses = () => {
    const courses = [
        {
            id: 1,
            image: '/upload/xcourse_01.png.pagespeed.ic.XTOvCuUmZu.png',
            title: 'MEARL DATA SCIENCE (MDS)',
            link: '/course/meal-data-science',
            students: '29 Students',
            rating: 5,
        },
        {
            id: 2,
            image: '/upload/xcourse_02.png.pagespeed.ic.PL7Wu2UcSB.png',
            title: 'BUSINESS & MARKET DATA SCIENCE (BMD)',
            link: '/course/business-market',
            students: '29 Students',
            rating: 4.5,
        },
        {
            id: 3,
            image: '/upload/xcourse_03.png.pagespeed.ic.8e1MyY5M7i.png',
            title: 'SCHOLARS DATA SCIENCE (SDC)',
            link: '/course/scholar-science',
            students: '13 Students',
            rating: 4,
        },
        {
            id: 4,
            image: '/upload/xcourse_09.png.pagespeed.ic.onaUPvr7s-.png',
            title: 'SCHOLARS DATA SCIENCE (SDC)',
            link: '/course/scholar-data',
            students: '20 Students',
            rating: 5,
        },
        {
            id: 5,
            image: '/upload/xcourse_05.png.pagespeed.ic.mrKpzOf8LX.png',
            title: 'INTRODUCTION TO STATISTICAL SOFTWARES (SPSS, R, or Python)',
            link: '/course/statistic',
            students: '18 Students',
            rating: 4.5,
        },
        {
            id: 6,
            image: '/upload/xcourse_06.png.pagespeed.ic.2iR1Lq1HrU.png',
            title: 'BASIC DATA VISUALIZATION TECHNIQUES AND TOOLS (e.g., Excel, Tableau)',
            link: '/course/data-visualisation',
            students: '22 Students',
            rating: 4,
        },
        {
            id: 7,
            image: '/upload/xcourse_07.png.pagespeed.ic.KNvblD_Vd1.png',
            title: 'ADVANCED DATA VISUALIZATION TECHNIQUES (TABLEAU, POWER BI, GGPLOT2)',
            link: '/course/advance-data',
            students: '12 Students',
            rating: 5,
        },
        {
            id: 8,
            image: '/upload/xcourse_08.png.pagespeed.ic.uuUPd8pkHT.png',
            title: 'MEASURING AND ENHANCING RESEARCH IMPACT (H-INDEX, CITATION METRICS)',
            link: '/course/measure-enhancing',
            students: '44 Students',
            rating: 4.5,
        },
    ];

    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex items-center gap-0.5 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => {
                    if (rating >= star) {
                        return <FaStar key={star} size={16} />;
                    } else if (rating + 0.5 >= star) {
                        return <FaStarHalfAlt key={star} size={16} />;
                    } else {
                        return <FaStar key={star} size={16} className="text-gray-300" />;
                    }
                })}
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto py-20 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                priority={course.id <= 4}
                            />

                            {/* Shopping Cart - Hover Effect */}
                            <Link
                                href="/cart"
                                className="absolute top-4 right-4 bg-white text-[var(--orange)] p-3 rounded-full shadow-md 
                                           opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                                           transition-all duration-300 hover:bg-[var(--blue)] hover:text-white"
                                aria-label="Add to cart"
                            >
                                <FaShoppingCart size={20} />
                            </Link>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                            <Link
                                href={course.link}
                                className="font-bold text-[15px] text-[var(--blue)] leading-tight hover:text-blue-700 transition-colors line-clamp-3 mb-3"
                            >
                                {course.title}
                            </Link>
                             <div className="flex items-center px-0 justify-between">
                                {/* Students */}
                            <p className="text-sm text-gray-600">
                                {course.students}
                            </p>
                            {/* Rating */}
                            <div className="flex items-center gap-2 ">
                                <StarRating rating={course.rating} />
                                <span className="text-sm text-gray-500">({course.rating})</span>
                            </div>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCourses;


// 'use client';

// import React from 'react';

// const ordinaryTracks = [
//   {
//     code: "C5-01",
//     name: "Data Analytics with SPSS",
//     image: "/images/data.jpg",
//     focus: "Statistical analysis using SPSS — descriptive stats, cross-tabulations, ANOVA, regression.",
//     tools: "IBM SPSS Statistics, Microsoft Excel, Microsoft Word",
//     ai: "ChatGPT, Claude",
//     assessment: "Beginner-level SPSS analysis report on a provided dataset.",
//   },
//   {
//     code: "C5-02",
//     name: "Advanced Excel for Data Intelligence",
//     image: "/images/data-intelligence.jpg",
//     focus: "Power Query, PivotTables, advanced formulas, and dashboards.",
//     tools: "Microsoft Excel, Power Query, OneDrive",
//     ai: "Excel Copilot, ChatGPT",
//     assessment: "Build a beginner-level Excel dashboard.",
//   },
//   {
//     code: "C5-03",
//     name: "Data Analysis with R",
//     image: "/images/r.jpg",
//     focus: "R programming with tidyverse and ggplot2 for data analysis.",
//     tools: "R, RStudio, tidyverse, ggplot2",
//     ai: "ChatGPT, Claude, GitHub Copilot",
//     assessment: "Beginner R Markdown analysis report.",
//   },
//   {
//     code: "C5-04",
//     name: "Data Analysis with STATA",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
//     focus: "STATA for regression, panel data, and survey analysis.",
//     tools: "STATA, Microsoft Excel",
//     ai: "ChatGPT, Claude",
//     assessment: "Beginner-level STATA analysis report.",
//   },
//   {
//     code: "C5-05",
//     name: "Qualitative Research with NVivo",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
//     focus: "Thematic coding and qualitative data analysis.",
//     tools: "NVivo, Microsoft Word, Excel",
//     ai: "ChatGPT, Claude",
//     assessment: "Beginner NVivo coded analysis.",
//   },
//   {
//     code: "C5-06",
//     name: "Power BI for Organisations",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
//     focus: "Data visualization and interactive dashboards with Power BI.",
//     tools: "Power BI Desktop, Excel, OneDrive",
//     ai: "Power BI Copilot, ChatGPT",
//     assessment: "Beginner Power BI report.",
//   },
//   {
//     code: "C5-07",
//     name: "Tableau for Data Visualisation",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
//     focus: "Interactive dashboards and visual storytelling.",
//     tools: "Tableau Public, Excel, Google Sheets",
//     ai: "ChatGPT, Claude",
//     assessment: "Beginner Tableau dashboard.",
//   },
//   {
//     code: "C5-08",
//     name: "AI Applications for Data Professionals",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
//     focus: "Practical use of AI tools in data work and prompt engineering.",
//     tools: "ChatGPT, Copilot, Claude, Gemini",
//     ai: "All major AI platforms",
//     assessment: "AI-assisted professional output.",
//   },
//   {
//     code: "C5-09",
//     name: "KoboToolbox & ODK for Field Data",
//     image: "/images/field.jpg",
//     focus: "Mobile data collection for field programmes.",
//     tools: "KoboToolbox, ODK Collect, Excel",
//     ai: "ChatGPT, Claude",
//     assessment: "Deploy a beginner KoboToolbox survey.",
//   },
//   {
//     code: "C5-10",
//     name: "DHIS2 for Health & Development Data",
//     image: "/images/health.jpg",
//     focus: "Health information management and dashboards.",
//     tools: "DHIS2, Excel, Google Sheets",
//     ai: "ChatGPT, Claude",
//     assessment: "Beginner DHIS2 dashboard tasks.",
//   },
//   {
//     code: "C5-11",
//     name: "GIS & Spatial Data Analytics",
//     image: "/images/gis.jpg",
//     focus: "Mapping and spatial analysis with QGIS.",
//     tools: "QGIS, Google Earth Pro, Excel",
//     ai: "ChatGPT, Google Maps AI",
//     assessment: "Beginner QGIS spatial map.",
//   },
// ];

// const Course5Ordinary = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-[var(--blue)] mb-4">
//           Course 5 — Ordinary Level
//         </h2>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           No prior experience required • 8 Weeks per track
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {ordinaryTracks.map((track, index) => (
//           <div
//             key={index}
//             className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//             style={{ animationDelay: `${index * 100}ms` }}
//           >
//             {/* Image */}
//             <div className="relative h-52 overflow-hidden">
//               <img
//                 src={track.image}
//                 alt={track.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute top-4 right-4">
//                 <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[var(--orange)] text-xs font-bold rounded-full shadow">
//                   ORDINARY
//                 </span>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-4 left-6 text-white">
//                 <span className="font-mono text-sm opacity-90">{track.code}</span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-7">
//               <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-3 min-h-[56px]">
//                 {track.name}
//               </h3>

//               <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
//                 {track.focus}
//               </p>

//               <div className="space-y-4 text-sm">
//                 <div>
//                   <p className="text-[var(--blue)] text-xs font-medium mb-1">TOOLS</p>
//                   <p className="text-gray-700">{track.tools}</p>
//                 </div>

//                 <div>
//                   <p className="text-[var(--blue)] text-xs font-medium mb-1">AI APPLICATIONS</p>
//                   <p className="text-gray-700">{track.ai}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="px-7 pb-7 pt-2">
//               <button className="w-full bg-[var(--orange)] hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl transition-all active:scale-95 shadow-md">
//                 Start This Track
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Course5Ordinary;