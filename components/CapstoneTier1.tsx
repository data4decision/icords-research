import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const CapstoneTier1 = () => {
  return (
    <div>
        <div className="mt-20 bg-gradient-to-br from-[var(--orange)] to-amber-50 border border-yellow-200 rounded-3xl p-10 md:p-16">
            <div className="text-center mb-10">
              <span className="px-5 py-2 bg-[var(--blue)] text-[var(--white)] rounded-full text-sm font-medium">TIER 1 | CAPSTONE</span>
              <h2 className="text-[20px] md:text-2xl lg:text-3xl font-bold mt-4 text-[var(--blue)]">Organisational Research & Strategy</h2>
              <p className="text-[var(--blue)] text-[12px] md:text-[15px] lg:text-md mt-2">Analytics Milestone: ★ DESCRIPTIVE ANALYTICS</p>
            </div>
        
            <p className="text-center text-[var(--blue)] text-[12px] md:text-[15px] lg:text-[18px] max-w-2xl mx-auto mb-10">
              Select a real organisation. Apply all four course areas to produce a comprehensive, evidence-based organisational strategy.
            </p>
        
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-sm">
              <div className="space-y-4">
                <div className="flex gap-3 text-[var(--blue)]"><FaCheckCircle className="text-[var(--blue)] mt-1 flex-shrink-0" /> Structured organisational diagnostic</div>
                <div className="flex gap-3 text-[var(--blue)]"><FaCheckCircle className="text-[var(--blue)] mt-1 flex-shrink-0" /> Integrated strategy across all four courses</div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 text-[var(--blue)]"><FaCheckCircle className="text-[var(--blue)] mt-1 flex-shrink-0" /> 5,000-word professional research report</div>
                <div className="flex gap-3 text-[var(--blue)]"><FaCheckCircle className="text-[var(--blue)] mt-1 flex-shrink-0" /> Panel presentation with external expert</div>
              </div>
            </div>
        
            <div className="text-center mt-12">
              <div className="inline-block bg-white px-10 py-5 rounded-2xl border border-[var(--blue)] shadow-sm">
                <p className="font-semibold text-[var(--orange)]">Award: <span className="text-[var(--blue)]">Dip.RL - Diploma in Research & Learning (Data Science)</span></p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CapstoneTier1