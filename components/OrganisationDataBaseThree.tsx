'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const OrganisationDatabaseThree = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "Results-Based Management for government programmes",
      "Logical frameworks and results chains for policy delivery",
      "Theory of change design for public sector interventions",
      "SMART indicators aligned to SDG and national targets",
      "Government data collection and administrative reporting tools",
      "Data quality assurance in national statistical systems",
      "Stakeholder reporting to ministries and oversight bodies",
      "Contribution analysis for policy attribution",
      "Data governance and ethics in public sector contexts",
      "Knowledge management for policy learning cycles"
    ],
    business: [
      "Results-Based Management in corporate programme contexts",
      "Logical frameworks and KPIs for business project delivery",
      "Theory of change for corporate social investment programmes",
      "SMART indicators for ESG and performance reporting",
      "Enterprise data collection and CRM-integrated field tools",
      "Data quality assurance in commercial reporting systems",
      "Stakeholder reporting to boards, investors, and regulators",
      "Contribution analysis for corporate impact attribution",
      "Data governance and ethics in commercial contexts",
      "Knowledge management and lessons-learned systems"
    ],
    livelihoods: [
      "Results-Based Management for development programmes",
      "Logical frameworks for multi-site livelihood projects",
      "Theory of change for community-level interventions",
      "SMART indicators for food security and livelihoods outcomes",
      "Field data collection instruments and mobile tools",
      "Data quality assurance in remote and low-resource settings",
      "Stakeholder reporting to donors, communities, and INGOs",
      "Contribution analysis and outcome attribution in development",
      "Data governance and ethics for beneficiary data",
      "Knowledge management and community learning loops"
    ]
  },
  assessment: "Design a research-informed M&E framework for a multi-phase project with a knowledge transfer plan",
  tools: "DevResults, DHIS2, Salesforce (programme mgmt), Power BI, SPSS, MAXQDA, R, Smartsheet",
  ai: "AI-driven adaptive management tools; predictive M&E dashboards using ML forecasting."
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
            <p className="text-[var(--white)] mt-3">Develops the ability to design, implement, and lead data management systems within project and programme environments.</p>
          </div>
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Diploma</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">★ Advanced M&E design, predictive decision-making, governance, data ethics, and stakeholder reporting.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Designing research-grade M&E frameworks with learning loops and knowledge transfer.</p>
        </div>
      </div>
      
      <div className="p-8 bg-[var(--blue)] border border-[var(--orange)]">
        <h4 className="font-semibold mb-6 text-[var(--white)]">Specialisation Context</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">A - Policy</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Research-grade policy M&E: contribution analysis, theory of change testing, SDG alignment.</p>
          </div>
          <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">B - Business</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Advanced corporate programme governance: risk-adjusted performance models, ESG reporting.</p>
          </div>
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">C - Livelihoods</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Multi-site livelihoods M&E: outcome harvesting, most significant change, impact pathways.</p>
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
                        <Image src="/images/fiqih-alfarish-dz2ApK93Idc-unsplash.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
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
                        <Image src="/images/kobu-agency-1-3zWhYFNhc-unsplash.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
                    </div>
                    </div>
                )
            }

            {
                isOpen === "livelihood" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="mt-6">
                        <ul className="list-decimal pl-6 space-y-2">
                        {topicsData.topics.livelihoods.map((item, index) => (
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
                                <span className=''>Enroll in Livelihoods Level</span>
                                <FaArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                               </button>
                            </Link>
                            <p className="text-sm text-[var(--blue)]/50 mt-3">
                              Limited slots available • Starts soon
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <Image src="/images/national-cancer-institute-duNbFJRhaJQ-unsplash.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
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

export default OrganisationDatabaseThree