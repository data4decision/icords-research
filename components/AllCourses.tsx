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