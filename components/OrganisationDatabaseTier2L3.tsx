'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const OrganisationDatabaseTier2L4 = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "National programme-level M&E architecture and standards",
      "Adaptive management in government programme delivery",
      "Portfolio performance monitoring for public sector programmes",
      "Outcome harvesting for government and multilateral contexts",
      "Systematic reviews for government evidence synthesis",
      "Predictive decision-making for public resource allocation",
      "Risk-adjusted performance modelling for national budgets",
      "Multi-ministry coordination and reporting systems",
      "Evidence commissioning for policy decision-making",
      "Digital transformation of national M&E infrastructure"
    ],
    business: [
      "Enterprise programme-level M&E and PMO architecture",
      "Adaptive management in corporate portfolio environments",
      "Portfolio performance analytics for investment governance",
      "Outcome measurement for ESG and corporate programmes",
      "Research synthesis for corporate evidence-based strategy",
      "Predictive decision-making for investment and risk",
      "Risk-adjusted modelling for portfolio optimisation",
      "Multi-stakeholder reporting systems for corporate governance",
      "Evidence commissioning for strategic business decisions",
      "Digital transformation of corporate programme management"
    ],
    livelihood: [
      "Regional programme M&E architecture for development",
      "Adaptive management in multi-site development programmes",
      "Portfolio performance monitoring for donor accountability",
      "Outcome harvesting and most significant change in development",
      "Systematic reviews for development evidence synthesis",
      "Predictive decision-making for livelihood resource targeting",
      "Risk-adjusted performance modelling for donor-funded programmes",
      "Multi-donor coordination and consolidated reporting systems",
      "Evidence commissioning for livelihoods programme strategy",
      "Digital transformation of field-based M&E systems"
    ]
  },
  assessment: "Develop a portfolio-level research and learning strategy with an evidence synthesis plan",
  tools: "Primavera P6, MS Project Online, Tableau (portfolio), Python, NVivo, Power BI, Jira Advanced",
  ai: "AI portfolio management tools; predictive resource allocation; ML-based risk identification."
} as const;

  return (

    <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[var(--blue)] px-8 py-8 border-b border-[var(--orange)]">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-mono text-sm text-yellow-600 font-bold">LS-03</span>
            <h3 className="text-3xl font-semibold mt-2 leading-tight text-[var(--white)]">Project Data Management Systems</h3>
            <p className="text-[var(--white)] mt-3">Develops the ability to design, implement, and lead data management systems within project and programme environments</p>
          </div>
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Master</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">★ Programme-level data strategy, adaptive management, portfolio oversight, and leading data teams.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Leading applied research within programme environments — commissioning and synthesising evidence</p>
        </div>
      </div>
      
      <div className="p-8 bg-[var(--blue)] border border-[var(--orange)]">
        <h4 className="font-semibold mb-6 text-[var(--white)]">Specialisation Context</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">A - Policy</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Advanced PIS architecture for government and multilateral programmes: predictive planning, national data systems, and cross-ministry coordination</p>
          </div>
          <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">B - Business</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Enterprise PIS leadership: portfolio-level information systems, predictive performance analytics, and corporate governance integration</p>
          </div>
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">C - Livelihoods</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Advanced PIS architecture for development programmes: predictive vulnerability tracking, multi-donor data environments, and impact forecasting.</p>
          </div>
        </div>
        </div>
        <div className="p-8 bg-[var(--white)] border-b border-[var(--orange)]">
            <h1 className="font-semibold mb-6 text-[var(--blue)]">Technical Learning Topics - by Specialisation</h1>

            <div className="flex flex-wrap gap-3">
  <button
    onClick={() => setIsOpen("policy")}
    className={`md:px-6 md:py-3 py-2 px-3 text-sm md:text-[16px] rounded-xl font-medium transition-all duration-200 ${
      isOpen === "policy"
        ? "bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30"
        : "bg-gray-100 hover:bg-gray-200 text-[var(--blue)] hover:text-[var(--blue)]/90"
    }`}
  >
    Policy
  </button>

  <button
    onClick={() => setIsOpen("business")}
    className={`md:px-6 md:py-3 py-2 px-3 text-sm md:text-[16px] rounded-xl font-medium transition-all duration-200 ${
      isOpen === "business"
        ? "bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30"
        : "bg-gray-100 hover:bg-gray-200 text-[var(--blue)] hover:text-[var(--blue)]/90"
    }`}
  >
    Business
  </button>

  <button
    onClick={() => setIsOpen("livelihood")}
    className={`md:px-6 md:py-3 py-2 px-3 text-sm md:text-[16px] rounded-xl font-medium transition-all duration-200 ${
      isOpen === "livelihood"
        ? "bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30"
        : "bg-gray-100 hover:bg-gray-200 text-[var(--blue)] hover:text-[var(--blue)]/90"
    }`}
  >
    Livelihood
  </button>
</div>
            {
                isOpen === "policy" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="mt-6">
                        <ul className="list-decimal pl-6 space-y-2">
                        {topicsData.topics.policy.map((item, index) => (
                            <li key={index} className="text-[var(--blue)] text-[12px] md:text-[15px]">
                            {item}
                            </li>
                        ))}
                        </ul>
                        <div className="mt-8">
                          <Link href="https://forms.gle/QHAzXKfzoikMNh8W9"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block bg-[var(--blue)]"
                            >
                              <button className="group relative inline-flex items-center gap-3 bg-bg-[var(--blue)] hover:bg-emerald-700 
                               text-white font-semibold md:text-lg text-xs sm:px-10 px-5 md:py-4 py-2 rounded-2xl transition-all duration-300
                               shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                                <span className=''>Enroll in Policy Level</span>
                                <FaArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                               </button>
                            </Link>
                            <p className="text-sm text-[var(--blue)]/50 mt-3">
                              Limited slots available • Starts soon
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <Image src="/images/hero1.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
                    </div>
                    </div>
                )
            }

            {
                isOpen === "business" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="mt-6">
                        <ul className="list-decimal pl-6 space-y-2">
                        {topicsData.topics.business.map((item, index) => (
                            <li key={index} className="text-[var(--blue)] text-[12px] md:text-[15px]">
                            {item}
                            </li>
                        ))}
                        </ul>
                        <div className="mt-8">
                          <Link href="https://forms.gle/QHAzXKfzoikMNh8W9"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block bg-[var(--blue)]"
                            >
                              <button className="group relative inline-flex items-center gap-3 bg-bg-[var(--blue)] hover:bg-emerald-700 
                               text-white font-semibold md:text-lg text-xs sm:px-10 px-5 md:py-4 py-2 rounded-2xl transition-all duration-300
                               shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                                <span className=''>Enroll in Business Level</span>
                                <FaArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                               </button>
                            </Link>
                            <p className="text-sm text-[var(--blue)]/50 mt-3">
                              Limited slots available • Starts soon
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <Image src="/images/hero2.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
                    </div>
                    </div>
                )
            }

            {
                isOpen === "livelihood" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="mt-6">
                        <ul className="list-decimal pl-6 space-y-2">
                        {topicsData.topics.livelihood.map((item, index) => (
                            <li key={index} className="text-[var(--blue)] text-[12px] md:text-[15px]">
                            {item}
                            </li>
                        ))}
                        </ul>
                        <div className="mt-8">
                          <Link href="https://forms.gle/QHAzXKfzoikMNh8W9"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block bg-[var(--blue)]"
                            >
                              <button className="group relative inline-flex items-center gap-3 bg-bg-[var(--blue)] hover:bg-emerald-700 
                               text-white font-semibold md:text-lg text-xs sm:px-10 px-5 md:py-4 py-2 rounded-2xl transition-all duration-300
                               shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                                <span className=''>Enroll in Livelihood Level</span>
                                <FaArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                               </button>
                            </Link>
                            <p className="text-sm text-[var(--blue)]/50 mt-3">
                              Limited slots available • Starts soon
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <Image src="/images/hero3.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
                    </div>
                    </div>
                )
            }
        </div>
        <div className="p-8 bg-[var(--white)] ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
                <h1 className="lg:text-lg text-base font-bold mb-2 text-[var(--blue)]">Assessment Tasks</h1>
            <p className="lg:text-md text-sm  text-[var(--blue)]">{topicsData.assessment}</p>
            </div>
            <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
                <h1 className="lg:text-lg text-base font-bold mb-2 text-[var(--blue)]">Software & Tools</h1>
                <p className="lg:text-md text-sm  text-[var(--blue)]">{topicsData.tools}</p>
            </div>
            <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
                <h1 className="lg:text-lg text-base font-bold mb-2 text-[var(--blue)]">AI Applications</h1>
                <p className="lg:text-md text-sm  text-[var(--blue)]">{topicsData.ai}</p>
            </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default OrganisationDatabaseTier2L4