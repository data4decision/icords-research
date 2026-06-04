'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const OrganisationDatabaseTier2L4 = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "PIS architecture strategy for government and multilateral programme environments",
      "Predictive planning systems — forecasting resource needs and scheduling risks in public sector",
      "Advanced monitoring & tracking — predictive KPI dashboards and early-warning systems for government",
      "Multi-ministry communication and collaboration system design",
      "Advanced data management in government PIS — data lakes, ETL pipelines, and statistical integration",
      "Predictive decision-support dashboards for ministerial and senior leadership audiences",
      "Distributed database systems and data warehousing for national PIS",
      "Advanced security, access control, and data sovereignty in government PIS",
      "Integrating PIS with national M&E architectures and SDG reporting frameworks",
      "Research design for predictive PIS evaluation in public sector contexts"
    ],
    business: [
      "Enterprise PIS architecture — designing systems that span portfolios and business units",
      "Predictive planning systems — demand forecasting, resource optimisation, and schedule risk modelling",
      "Advanced monitoring & tracking — ML-powered KPI dashboards and portfolio risk systems",
      "Enterprise communication and collaboration platform integration",
      "Advanced data management in commercial PIS — data lakes, BI integration, and real-time analytics",
      "Predictive decision-support dashboards for C-suite and investor reporting",
      "Cloud-native database architecture for enterprise project information systems",
      "Advanced IS security, access control, and compliance in regulated business contexts",
      "Integrating PIS with ERP, CRM, and enterprise analytics ecosystems",
      "Research design for predictive PIS performance studies in business"
    ],
    livelihood: [
      "PIS architecture strategy for complex multi-site development and humanitarian programmes",
      "Predictive planning systems — forecasting livelihood risks and resource needs in field environments",
      "Advanced monitoring & tracking — predictive vulnerability dashboards and shock early-warning systems",
      "Multi-partner and multi-donor communication and collaboration system design",
      "Advanced data management in development PIS — federated systems, field pipelines, and aggregation",
      "Predictive decision-support systems for donor, INGO, and government audiences",
      "Federated database architecture for continental development PIS",
      "Advanced security and access control for sensitive beneficiary data at scale",
      "Integrating PIS with MEAL frameworks and humanitarian data standards",
      "Research design for predictive PIS evaluation in development contexts"
    ]
  },
  assessment: "Architect a predictive Project Information System for a complex programme environment, demonstrating advanced data management, predictive decision-support, and governance documentation at M.RL research standard.",
  tools: "Primavera P6, MS Project Online, Jira Advanced, Power BI, Python (predictive modules), Tableau, DHIS2 (advanced), Apache Airflow",
  ai: "ML-powered project risk prediction and adaptive scheduling; AI-assisted PIS architecture recommendations"
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
            <p className="text-[var(--white)] mt-3">Develops the ability to lead, architect, and evaluate advanced Project Information Systems that generate predictive intelligence across the project lifecycle</p>
          </div>
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Master</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">★ Architecting and leading Project Information Systems (PIS) that integrate predictive analytics, adaptive management, and multi-stakeholder data environments</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Leading applied PIS research, designing systems that generate predictive project intelligence and support evidence-based adaptive management</p>
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