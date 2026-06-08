'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Tier3OrganisationDatabase3 = () => {

    const [isOpen, setIsOpen] = useState("policy")
     const [activeTab, setActiveTab] = useState<'policy' | 'business' | 'livelihoods'>('policy')
    

    const topicsData = {
  topics: {
    policy: [
      "National PIS strategy — setting standards for government project information environments",
      "Prescriptive decision-support systems for national programme optimisation and policy delivery",
      "Advanced PIS security, digital sovereignty, and cross-border data governance for government",
      "Designing PIS governance frameworks for public accountability and transparency",
      "AI-native PIS architectures — strategic evaluation for national and multilateral institutions",
      "Research leadership in PIS for public sector transformation",
      "Publishing PIS frameworks for government and international policy audiences",
      "Long-term sustainability and resilience of national project information infrastructures",
      "Causal evaluation of PIS impact on government programme delivery outcomes",
      "Leading continental-scale PIS reform and standards advisory for the public sector"
    ],
    business: [
      "Enterprise PIS strategy — board-level advisory and thought leadership frameworks",
      "Prescriptive PIS decision-support — optimisation engines for enterprise portfolio management",
      "Advanced PIS security, IP protection, and cross-jurisdictional compliance",
      "Designing enterprise PIS governance frameworks for investor and regulatory accountability",
      "AI-native PIS architectures — strategic evaluation for enterprise competitive advantage",
      "Research leadership and publication in enterprise PIS innovation",
      "Publishing PIS frameworks for industry and professional audiences",
      "Long-term enterprise PIS sustainability, resilience, and digital transformation strategy",
      "Causal evaluation of PIS impact on corporate programme performance and ROI",
      "Leading sector-wide PIS standards and advisory at the industry level"
    ],
    livelihoods: [
      "Continental PIS strategy — setting standards for development and humanitarian organisations",
      "Prescriptive PIS decision-support for livelihood intervention optimisation and targeting",
      "Advanced PIS security and data sovereignty for cross-border development systems",
      "Designing open PIS governance frameworks for community accountability and donor transparency",
      "AI-native PIS architectures — strategic evaluation for continental development institutions",
      "Research leadership in PIS for development sector transformation",
      "Publishing open PIS frameworks for livelihoods and humanitarian audiences",
      "Long-term sustainability of livelihoods PIS infrastructure at continental scale",
      "Causal evaluation of PIS impact on development programme delivery and beneficiary outcomes",
      "Leading continental PIS reform and standards advisory for development organisations"
    ]
  },
  assessment: "Produce a D.RL strategic research contribution on Project Information Systems — a published framework, white paper, or advisory report with sector-wide applicability and original theoretical contribution",
  tools: "Enterprise architecture tools (TOGAF, ArchiMate), Zenodo, GitHub, ORCID, Quarto, Python/R, Planview, Clarity PPM",
  ai: "Setting AI-in-PIS standards at institutional and sector level; evaluating and publishing responsible AI-PIS governance frameworks"
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
            <p className="text-[var(--white)] mt-3">Develops strategic leadership and original research contribution in Project Information Systems — shaping standards, advising institutions, and driving sector transformation</p>
          </div>
          <span className="text-sm text-[var(--blue)] bg-[var(--white)] px-4 py-2 rounded-full border">Doctorate</span>
        </div>
      </div>

      {/* Focus & Research */}
      <div className="grid md:grid-cols-2 gap-8 p-8 border-b border-[var(--orange)]">
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Course Focus</h4>
          <p className="text-[var(--blue)]">★ Leading PIS strategy at institutional and sector level — setting standards, publishing frameworks, and advising organisations on PIS-led transformation for prescriptive decision-making</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[var(--blue)]">Research Strand</h4>
          <p className="text-[var(--blue)]">Producing original research that advances the theory and practice of Project Information Systems across sectors</p>
        </div>
      </div>
      
      <div className="p-8 bg-[var(--blue)] border border-[var(--orange)]">
        <h4 className="font-semibold mb-6 text-[var(--white)]">Specialisation Context</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">A - Policy</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Advising governments on national PIS strategy and standards; shaping how public sector organisations design and govern project information environments</p>
          </div>
          <div className="border border-[var(--orange)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">B - Business</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Board-level PIS advisory and thought leadership; authoring enterprise PIS frameworks that drive competitive and governance advantage</p>
          </div>
          <div className="border border-[var(--white)] rounded-lg px-4 py-3">
            <h1 className="text-[var(--orange)] font-bold text-md sm:text-lg md:text-xl lg:text-xl">C — Livelihoods</h1>
            <p className="text-[var(--white)] mt-2 text-sm sm:text-md md:text-md lg:text-sm">Leading the design of continental PIS standards for development organisations; driving sector transformation in how livelihoods programmes manage project intelligence</p>
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