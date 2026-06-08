'use client';

import React from 'react';
import C5QuickLink from '@/components/C5QuickLink';
import Navbar from '@/components/Navbar';
import TopNavbar from '@/components/TopNavbar';
import Image from 'next/image';
import Course5HeaderTwo from '@/components/Course5HeaderTwo';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

const associateTracks = [
  {
    code: "C5-01",
    name: "Data Analytics with SPSS",
    image: "/images/data.jpg",
    focus: "Advanced statistical modelling - ANOVA, multiple regression, factor analysis, reliability testing, and publication-ready reports using SPSS Syntax.",
    tools: "IBM SPSS Statistics (Advanced), SPSS Syntax Editor, Microsoft Excel, Microsoft Word",
    ai: "ChatGPT (Advanced Interpretation), Claude (Regression & ANOVA), AI Syntax Assistants",
    assessment: "Advanced SPSS output with regression/factor analysis + 500-word reflection",
  },
  {
    code: "C5-02",
    name: "Advanced Excel for Data Intelligence",
    image: "/images/data-intelligence.jpg",
    focus: "Advanced data modelling - Power Query ETL, Power Pivot, dynamic arrays, DAX-like logic, and professional interactive dashboards.",
    tools: "Microsoft Excel (Full Suite), Power Query, Power Pivot, Excel Copilot",
    ai: "Excel Copilot (Automation & Insights), ChatGPT (Complex Debugging), AI Modelling Tools",
    assessment: "Professional Excel dashboard + 500-word reflection on organisational impact",
  },
  {
    code: "C5-03",
    name: "Data Analysis with R",
    image: "/images/r.jpg",
    focus: "Advanced R programming - statistical modelling, advanced visualisation, reproducible research with Quarto, and GitHub integration.",
    tools: "R, RStudio, tidyverse (Advanced), ggplot2 (Advanced), Quarto, GitHub",
    ai: "GitHub Copilot, ChatGPT (Model Interpretation), Claude (Reproducible Research)",
    assessment: "Advanced R report with statistical modelling + 500-word reflection",
  },
  {
    code: "C5-04",
    name: "Data Analysis with STATA",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    focus: "Advanced econometric analysis - multiple regression, panel data models, survey weighting, and publication-ready outputs.",
    tools: "STATA (Advanced), Do-File Editor, Microsoft Excel, LaTeX/Word",
    ai: "ChatGPT (Regression Interpretation), Claude (Do-File Support), AI Output Narration",
    assessment: "Advanced STATA model (regression/panel) + 500-word reflection",
  },
  {
    code: "C5-05",
    name: "Qualitative Research with NVivo",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    focus: "Advanced qualitative analysis - framework matrices, complex queries, mixed-methods integration, and professional reporting.",
    tools: "NVivo (Advanced), Microsoft Word, Excel, Qualtrics/KoboToolbox",
    ai: "NVivo AI, ChatGPT (Framework Support), Claude (Mixed-Methods)",
    assessment: "Advanced NVivo project + 500-word reflection",
  },
  {
    code: "C5-06",
    name: "Power BI for Organisations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    focus: "Enterprise-grade Power BI - Advanced DAX, row-level security, bookmarks, drill-through, and Power BI Service deployment.",
    tools: "Power BI Desktop & Service, Power Query (M), DAX, Excel, SharePoint",
    ai: "Power BI Copilot, DAX AI Assistants, ChatGPT (Advanced DAX)",
    assessment: "Advanced interactive Power BI dashboard + 500-word reflection",
  },
  {
    code: "C5-07",
    name: "Tableau for Data Visualisation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    focus: "Advanced visual storytelling - LOD expressions, table calculations, advanced interactions, and enterprise publishing.",
    tools: "Tableau Desktop, Tableau Public, Tableau Cloud/Server, Excel, Google Sheets",
    ai: "Tableau Pulse, ChatGPT (LOD Support), Einstein Suggestions",
    assessment: "Advanced Tableau dashboard + 500-word reflection",
  },
  {
    code: "C5-08",
    name: "AI Applications for Data Professionals",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    focus: "Advanced AI integration - prompt engineering, workflow automation, AI in BI tools, bias evaluation, and responsible AI governance.",
    tools: "ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity, Notion AI",
    ai: "All major AI platforms + AI workflow automation",
    assessment: "Advanced AI-integrated output + 500-word responsible AI reflection",
  },
  {
    code: "C5-09",
    name: "KoboToolbox & ODK for Field Data",
    image: "/images/field.jpg",
    focus: "Advanced mobile data collection - complex logic, API integration, data quality pipelines, and analysis integration.",
    tools: "KoboToolbox (Advanced), ODK Central, Power BI, Excel",
    ai: "ChatGPT (Complex Logic), AI Survey Analysis Tools",
    assessment: "Advanced Kobo form with logic + integrated analysis + reflection",
  },
  {
    code: "C5-10",
    name: "DHIS2 for Health & Development Data",
    image: "/images/health.jpg",
    focus: "Advanced DHIS2 - Tracker programmes, custom indicators, GIS integration, and cross-system data pipelines.",
    tools: "DHIS2 (Aggregate + Tracker), Power BI, KoboToolbox, Excel",
    ai: "AI Indicator Support, ChatGPT (Advanced Reporting)",
    assessment: "Advanced DHIS2 dashboard + 500-word reflection",
  },
  {
    code: "C5-11",
    name: "GIS & Spatial Data Analytics",
    image: "/images/gis.jpg",
    focus: "Advanced spatial analysis - geoprocessing, raster analysis, spatial joins, and integrated reporting with R.",
    tools: "QGIS (Advanced), ArcGIS (Intro), R (sf, ggplot2), KoboToolbox GPS",
    ai: "ChatGPT (Spatial Interpretation), GitHub Copilot, Google Maps AI",
    assessment: "Advanced spatial analysis report + 500-word reflection",
  },
];

const Course5Associate = () => {
  return (
    <div className="">
        <TopNavbar/>
        <Navbar/>
        <Course5HeaderTwo/>
    
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-[var(--blue)] mb-4">
          Course 5 - Associate Level
        </h2>
        <p className="text-md text-[var(--orange)] max-w-2xl mx-auto">
          No prior experience required • 8 Weeks per track
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {associateTracks.map((track, index) => (
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
                  ASSOCIATE
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

export default Course5Associate;