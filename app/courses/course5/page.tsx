'use client';

import C5QuickLink from '@/components/C5QuickLink';
import Course5Header from '@/components/Course5Header';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import Navbar from '@/components/Navbar';
import TopNavbar from '@/components/TopNavbar';
import React from 'react';

const ordinaryTracks = [
  {
    code: "C5-01",
    name: "Data Analytics with SPSS",
    image: "/images/data.jpg",
    focus: "Statistical analysis using SPSS — descriptive stats, cross-tabulations, ANOVA, regression.",
    tools: "IBM SPSS Statistics, Microsoft Excel, Microsoft Word",
    ai: "ChatGPT, Claude",
    assessment: "Beginner-level SPSS analysis report on a provided dataset.",
  },
  {
    code: "C5-02",
    name: "Advanced Excel for Data Intelligence",
    image: "/images/data-intelligence.jpg",
    focus: "Power Query, PivotTables, advanced formulas, and dashboards.",
    tools: "Microsoft Excel, Power Query, OneDrive",
    ai: "Excel Copilot, ChatGPT",
    assessment: "Build a beginner-level Excel dashboard.",
  },
  {
    code: "C5-03",
    name: "Data Analysis with R",
    image: "/images/r.jpg",
    focus: "R programming with tidyverse and ggplot2 for data analysis.",
    tools: "R, RStudio, tidyverse, ggplot2",
    ai: "ChatGPT, Claude, GitHub Copilot",
    assessment: "Beginner R Markdown analysis report.",
  },
  {
    code: "C5-04",
    name: "Data Analysis with STATA",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    focus: "STATA for regression, panel data, and survey analysis.",
    tools: "STATA, Microsoft Excel",
    ai: "ChatGPT, Claude",
    assessment: "Beginner-level STATA analysis report.",
  },
  {
    code: "C5-05",
    name: "Qualitative Research with NVivo",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    focus: "Thematic coding and qualitative data analysis.",
    tools: "NVivo, Microsoft Word, Excel",
    ai: "ChatGPT, Claude",
    assessment: "Beginner NVivo coded analysis.",
  },
  {
    code: "C5-06",
    name: "Power BI for Organisations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    focus: "Data visualization and interactive dashboards with Power BI.",
    tools: "Power BI Desktop, Excel, OneDrive",
    ai: "Power BI Copilot, ChatGPT",
    assessment: "Beginner Power BI report.",
  },
  {
    code: "C5-07",
    name: "Tableau for Data Visualisation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    focus: "Interactive dashboards and visual storytelling.",
    tools: "Tableau Public, Excel, Google Sheets",
    ai: "ChatGPT, Claude",
    assessment: "Beginner Tableau dashboard.",
  },
  {
    code: "C5-08",
    name: "AI Applications for Data Professionals",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    focus: "Practical use of AI tools in data work and prompt engineering.",
    tools: "ChatGPT, Copilot, Claude, Gemini",
    ai: "All major AI platforms",
    assessment: "AI-assisted professional output.",
  },
  {
    code: "C5-09",
    name: "KoboToolbox & ODK for Field Data",
    image: "/images/field.jpg",
    focus: "Mobile data collection for field programmes.",
    tools: "KoboToolbox, ODK Collect, Excel",
    ai: "ChatGPT, Claude",
    assessment: "Deploy a beginner KoboToolbox survey.",
  },
  {
    code: "C5-10",
    name: "DHIS2 for Health & Development Data",
    image: "/images/health.jpg",
    focus: "Health information management and dashboards.",
    tools: "DHIS2, Excel, Google Sheets",
    ai: "ChatGPT, Claude",
    assessment: "Beginner DHIS2 dashboard tasks.",
  },
  {
    code: "C5-11",
    name: "GIS & Spatial Data Analytics",
    image: "/images/gis.jpg",
    focus: "Mapping and spatial analysis with QGIS.",
    tools: "QGIS, Google Earth Pro, Excel",
    ai: "ChatGPT, Google Maps AI",
    assessment: "Beginner QGIS spatial map.",
  },
];

const Course5Ordinary = () => {
  return (
    <div className="">
        <TopNavbar/>
        <Navbar/>
        <Course5Header/>
    
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-[var(--blue)] mb-4">
          Course 5 - Ordinary Level
        </h2>
        <p className="text-md text-[var(--orange)] max-w-2xl mx-auto">
          No prior experience required • 8 Weeks per track
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ordinaryTracks.map((track, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={track.image}
                alt={track.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1.5 bg-[var(--orange)] backdrop-blur-sm text-[var(--white)] px-2 py-1 text-xs font-bold rounded-full shadow">
                  ORDINARY
                </span>
              </div>
              <div className="absolute top-0 left-0 right-0 h-24 " />
              <div className="absolute top-4 left-6   ">
                <span className="font-mono text-sm px-3 bg-[var(--blue)]/10 text-[var(--white)] rounded-r-full rounded-bl-full shadow ">{track.code}</span>
              </div>
            </div>

            {/* Content */}
            
            <div className="grid grid-cols-1 gap-1">
                <div className=" ">
                    <h3 className="lg:text-md md:text-base text-[15px] px-3 py-2 font-semibold text-[var(--blue)] leading-tight mb-3 min-h-[56px]">
                {track.name}
              </h3>
                </div>
                <div className="">
                    <p className="text-[var(--blue)] text-xs px-3 text-sm leading-relaxed mb-6 line-clamp-3">
                {track.focus}
              </p>
                </div>
                <div className=" text-sm px-3">
                <div>
                  <p className="text-[var(--blue)] text-xs font-semibold mb-1">TOOLS</p>
                  <p className="text-[var(--blue)] text-xs">{track.tools}</p>
                </div>
                <div className="mt-2">
                  <p className="text-[var(--blue)] text-xs font-semibold mb-1">AI APPLICATIONS</p>
                  <p className="text-[var(--blue)] text-xs">{track.ai}</p>
                </div>
                </div>
                {/* Footer */}
                <div className="w-[90%] mx-auto px-7 pb-4 pt-2" >
              <button className="w-full lg:text-[14px] md:text-[12px] text-[12px] bg-[var(--orange)] hover:bg-[var(--orange)]/90 lg:text-lg md:text-base text-xs text-white font-semibold py-2 rounded-2xl transition-all active:scale-95 shadow-md">
                Start This Track
              </button>
            </div>
            </div>

            
            
          </div>
        ))}
      </div>
      <C5QuickLink/>
    </div>
    <Map/>
    <Footer/>
    </div>
  );
};

export default Course5Ordinary;