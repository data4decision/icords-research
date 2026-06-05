'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Tier3OrganisationDatabase3 = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "Strategic M&E research leadership for government programmes",
      "Advanced causal evaluation for public sector attribution",
      "Impact aggregation across national programme portfolios",
      "National M&E standards-setting and government policy influence",
      "Research publication for national and international policy audiences",
      "Continental-scale government intelligence system design",
      "AI-assisted evaluation frameworks for public sector programmes",
      "Long-term impact assessment for national development strategies",
      "Organisational learning systems for government ministries",
      "Leading national sector transformation through M&E evidence"
    ],
    business: [
      "Strategic M&E research leadership in corporate environments",
      "Advanced causal evaluation for corporate impact attribution",
      "Impact aggregation across enterprise programme portfolios",
      "Corporate M&E standards and ESG framework authorship",
      "Research publication for industry and professional audiences",
      "Enterprise-scale programme intelligence system design",
      "AI-assisted evaluation frameworks for corporate governance",
      "Long-term impact assessment for corporate strategy cycles",
      "Organisational learning systems for enterprise knowledge",
      "Leading industry transformation through corporate programme evidence"
    ],
    livelihoods: [
      "Strategic M&E research leadership in development contexts",
      "Advanced causal evaluation for development impact attribution",
      "Impact aggregation across multi-donor continental programmes",
      "Continental M&E standards-setting and sector policy influence",
      "Research publication for humanitarian and development audiences",
      "Continental-scale livelihoods intelligence system design",
      "AI-assisted evaluation frameworks for development organisations",
      "Long-term impact assessment for continental development strategies",
      "Organisational learning systems for development agencies",
      "Leading continental sector transformation through development evidence"
    ]
  },
  assessment: "Produce a D.RL research contribution on data-driven project management with sector-wide impact",
  tools: "Planview, Clarity PPM, Python/R, NVivo/MAXQDA, Zenodo, GitHub, ORCID, Quarto",
  ai: "Shaping AI standards for programme management; authoring AI-assisted evaluation frameworks"
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
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Doctorate</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">★ Strategic leadership of project intelligence systems, shaping data standards, and advisory roles</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Producing original research, transforming how organisations manage projects across sectors</p>
        </div>
      </div>
      
      <div className="p-8 bg-[var(--blue)] border border-[var(--orange)]">
        <h4 className="font-semibold mb-6 text-[var(--white)]">Specialisation Context</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">A - Policy</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Setting national M&E and data standards; advising governments on data-driven delivery models</p>
          </div>
          <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">B - Business</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Thought leadership in corporate project intelligence; authoring sector standards and frameworks</p>
          </div>
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">C — Livelihoods</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Driving systemic improvement in livelihoods programme management at a continental scale</p>
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
                        {topicsData.topics.livelihoods.map((item, index) => (
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

export default Tier3OrganisationDatabase3