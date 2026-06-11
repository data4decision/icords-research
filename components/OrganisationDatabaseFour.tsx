'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const OrganisationDatabaseFour = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "Introduction to Project Information Systems - concepts, functions, and components for government",
      "PIS for project planning — work plans, scheduling, and resource allocation in the public sector",
      "PIS for monitoring & tracking - milestone tracking and KPI monitoring for government programmes",
      "Communication and collaboration tools for government project teams and ministries",
      "Data management in government PIS - collection, storage, and validation of programme data",
      "Dashboard and reporting design for ministerial and stakeholder audiences",
      "Database systems as the foundation of government PIS",
      "Security and access control in public sector project information systems",
      "Integrating PIS with SDG and national indicator frameworks",
      "Research ethics and governance in government PIS data use"
    ],
    business: [
      "Introduction to Project Information Systems — concepts, functions, and components for business",
      "PIS for project planning — work breakdown, budgeting, and resource scheduling in commercial contexts",
      "PIS for monitoring & tracking — milestone management, KPI dashboards, and risk registers",
      "Communication and collaboration tools for commercial project teams and stakeholders",
      "Data management in commercial PIS — CRM integration, storage, and transactional data quality",
      "Dashboard and reporting design for clients, boards, and executives",
      "Database systems as the foundation of enterprise PIS",
      "Security, access control, and IP protection in commercial project systems",
      "Integrating PIS with ERP and enterprise analytics platforms",
      "Ethics and data governance in commercial project information management"
    ],
    livelihoods: [
      "Introduction to Project Information Systems — concepts, functions, and components for development",
      "PIS for project planning — work plans, field scheduling, and resource allocation for NGO programmes",
      "PIS for monitoring & tracking — beneficiary tracking, milestone monitoring, and KPI management",
      "Communication and collaboration tools for field teams, partners, and donors",
      "Data management in development PIS — field data collection, storage, and quality assurance",
      "Dashboard and reporting design for donor, community, and INGO audiences",
      "Database systems as the foundation of the field-based programme PIS",
      "Security and access control for beneficiary data in development PIS",
      "Integrating PIS with M&E frameworks and humanitarian data standards",
      "Ethics and data protection in community project information systems"
    ]
  },
  assessment: "Design a Project Information System for a real project environment, demonstrating planning, monitoring, data management, and decision-support functions with a sector-appropriate governance framework.",
  tools: "Microsoft Project, Smartsheet, Asana, DHIS2, KoboToolbox, Power BI, Trello, Notion, Google Workspace",
  ai: "AI-assisted project scheduling and risk flagging; LLM-powered reporting and stakeholder communication tools."
} as const;

  return (

    <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[var(--blue)] px-8 py-8 border-b border-[var(--orange)]">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-mono text-sm text-yellow-600 font-bold">LS-04</span>
            <h3 className="text-3xl font-semibold mt-2 leading-tight text-[var(--white)]">Project Information Systems</h3>
            <p className="text-[var(--white)] mt-3">Develops the ability to design, implement, and manage information systems that support effective project planning, monitoring, and decision-making.</p>
          </div>
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Diploma</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">★ Designing and operating Project Information Systems (PIS) — integrating people, processes, data, and technology to support the full project lifecycle at the Descriptive Analytics level</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Designing PIS that generates reliable, descriptive project intelligence to support evidence-based planning and reporting.</p>
        </div>
      </div>
      
      <div className="p-8 bg-[var(--blue)] border border-[var(--orange)]">
        <h4 className="font-semibold mb-6 text-[var(--white)]">Specialisation Context</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">A - Policy</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">PIS design for government programme delivery: work plans, scheduling, SDG tracking, and ministerial reporting.</p>
          </div>
          <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">B - Business</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">PIS design for commercial projects: budget tracking, milestone management, client reporting, and performance dashboards.</p>
          </div>
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">C - Livelihoods</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">PIS design for development field programmes: beneficiary tracking, field data collection, and donor reporting systems</p>
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
                        <Image src="/images/antar-ray-fj6SGycA5LI-unsplash.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
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
                        <Image src="/images/sayyam-abbasi-VJjQo_zyr7Q-unsplash.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
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
                        <Image src="/images/antar-ray-m7oWgfDnWh0-unsplash.jpg" alt="Database Icon" width={500} height={220} className="mt-6 rounded-lg border border-gray-200 shadow-sm" />
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

export default OrganisationDatabaseFour