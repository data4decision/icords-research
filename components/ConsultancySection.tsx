'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaChartLine, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const ConsultancySection = () => {
  return (
    <section className="relative py-24 overflow-hidden ">
        <Image
        src='/upload/xslider_new_02.jpg.pagespeed.ic.QHr4wT-HDB.jpeg'
        alt="Consultancy"
        className="absolute  object-cover  w-full"
        width={600}
        height={600}
      />
      {/* Background Decorative Elements */}
      {/* <div className="absolute">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--blue)] rounded-full " />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--orange)] rounded-full blur-3xl" />
      </div> */}

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-[var(--lightblue)]/30 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-[var(--blue)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--orange)]">Expert Consultancy Services</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[var(--blue)] mb-6">
              Professional Consultancy <br />
              <span className="text-[var(--orange)]">That Drives Results</span>
            </h2>

            <p className="text-md text-[var(--blue)]/80 leading-relaxed mb-10">
              The International College of Research and Data Science (ICORDS) offers a comprehensive 
              suite of consultancy services tailored to scholars, development experts, and business 
              managers seeking excellence in research, data analytics, and strategic growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white hover:bg-gray-50 border-2 border-[var(--lightblue)] text-[var(--lightblue)] font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
              >
                <FaDownload className="group-hover:-translate-y-0.5 transition-transform" />
                Download Brochure
              </motion.button>

              {/* Join Us Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-[var(--lightblue)] hover:bg-[var(--blue)] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                Join Us Today
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <p className="text-sm text-[var(--gray)]/60 mt-6">
              Trusted by researchers and institutions across Africa
            </p>
          </motion.div>

          {/* Right Visual / Animation Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md border border-gray-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--blue)]">Our Expertise</h3>
                    <p className="text-[var(--blue)]/60 text-sm">Research • Data • Strategy</p>
                  </div>
                  <div className="text-4xl text-[var(--blue)]"><FaChartLine/></div>
                </div>

                <div className="space-y-6 ">
                  {[
                    "Research Design & Methodology",
                    "Data Analysis & Visualization",
                    "Impact Evaluation",
                    "Strategic Planning",
                    "Academic Publishing Support"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 "
                    >
                      <div className="w-5 h-5 rounded-full bg-[var(--orange)] flex items-center justify-center text-[var(--white)] text-xs">✓</div>
                      <span className="text-[var(--blue)]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white shadow-lg rounded-2xl px-5 py-3 flex items-center gap-3 border border-[var(--lightblue)]/30"
              >
                <div className="text-2xl text-blue-700"><FaGlobe/></div>
                <div>
                  <p className="font-semibold text-sm">Serving Across</p>
                  <p className="text-[var(--lightblue)] text-xs">Africa & Beyond</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;