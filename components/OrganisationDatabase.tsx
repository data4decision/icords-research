import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const OrganisationDatabase = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "Relational design for government statistical systems",
      "ER modelling for cross-ministry data sharing",
      "SQL for national indicator and census data",
      "Interoperability standards and schema alignment",
      "Audit trails for public accountability and compliance",
      "Data migration across government legacy systems",
      "Version control for regulatory and policy databases",
      "Open government data publication pipelines",
      "Backup and recovery for critical national systems",
      "Stored procedures for automated statistical reporting"
    ],
    business: [
      "Relational database design for enterprise finance systems",
      "ER modelling for multi-branch organisations",
      "SQL for transactional and operational reporting",
      "Schema design and indexing for high-volume commerce",
      "Database performance tuning in enterprise environments",
      "Data migration and ETL for ERP systems",
      "Stored procedures and triggers for business workflows",
      "Database backup and disaster recovery planning",
      "Audit trails for financial governance and compliance",
      "Introduction to NoSQL for unstructured business data"
    ],
    livelihood: [   // Changed to "livelihood" to match your button
      "Relational database design for field programme data",
      "ER modelling for value chain and beneficiary tracking",
      "SQL for livelihoods indicators and household surveys",
      "Multi-site schema design for regional programmes",
      "Performance tuning for low-bandwidth field environments",
      "Data migration for community information systems",
      "Version control for evolving M&E frameworks",
      "Offline-first database design and sync strategies",
      "Audit trails for donor compliance and accountability",
      "Introduction to NoSQL for unstructured field data"
    ]
  },
  assessment: "Redesign a legacy database to support an organisational research programme with governance controls.",
  tools: "PostgreSQL, Oracle DB, ERwin, Flyway, GitHub, DBeaver, Google Sheets, MySQL",
  ai: "AI-powered database performance monitoring; automated migration validation tools."
} as const;

  return (

    <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[var(--blue)] px-8 py-8 border-b border-[var(--orange)]">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-mono text-sm text-yellow-600 font-bold">LS-01</span>
            <h3 className="text-3xl font-semibold mt-2 leading-tight text-[var(--white)]">Organisational Database Design & Development</h3>
            <p className="text-[var(--white)] mt-3">Equips learners to design, build, and manage databases that serve real organisational needs.</p>
          </div>
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Diploma</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">Advanced schema design, performance tuning, migration planning, and enterprise data modelling.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Designing databases that embed audit trails and version control for longitudinal research</p>
        </div>
      </div>
      
      <div className="p-8 bg-[var(--blue)] border border-[var(--orange)]">
        <h4 className="font-semibold mb-6 text-[var(--white)]">Specialisation Context</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">A - Policy</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Designing interoperable databases for cross-ministry data sharing and national statistics.</p>
          </div>
          <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">B - Business</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Enterprise database architecture for multi-branch organisations and financial institutions.</p>
          </div>
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">C — Livelihoods</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Multi-site databases for regional development programmes and value chain tracking.</p>
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

export default OrganisationDatabase