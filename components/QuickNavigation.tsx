'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const QuickNavigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div className='max-w-7xl mx-auto px-6 pt-10'>
         <div className="flex flex-wrap gap-3 justify-center mb-12">
      {/* All Courses */}
      <Link
        href="/courses"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        ← All Courses
      </Link>

      {/* Current Tier - Highlighted Orange */}
      {/* <button className="px-6 py-3 bg-[var(--orange)] text-white rounded-full text-sm font-medium shadow cursor-default">
        Tier 1 - LS-01
      </button> */}
      <Link
        href="/courses/tier-1"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/tier-1')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Tier 1 - LS-01
      </Link>

      {/* LS-02 */}
      <Link
        href="/courses/tier-1/LS-02"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/tier-1/LS-02')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Tier 1 - LS-02
      </Link>

      {/* LS-03 */}
      <Link
        href="/courses/tier-1/LS-03"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/tier-1/LS-03')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Tier 1 - LS-03
      </Link>

      <Link
        href="/courses/tier-1/LS-04"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/tier-1/LS-04')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Tier 1 - LS-04
      </Link>
    </div>

        {/* Legend */}
        <div className="mb-16">
          <h3 className="font-semibold mb-4 text-center text-[var(--orange)]">Specialisations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-[var(--blue)]/10 border border-[var(--blue)]/50 p-5 rounded-2xl text-center">
              <div className="font-bold text-[var(--blue)]">A - Policy</div>
              <p className="text-sm text-[var(--blue)] mt-1">Government • National Statistics • Multilateral</p>
            </div>
            <div className="bg-[var(--orange)]/10 border border-[var(--orange)] p-5 rounded-2xl text-center">
              <div className="font-bold text-[var(--orange)]">B - Business</div>
              <p className="text-sm text-[var(--orange)] mt-1">Private Sector • Finance • Consulting</p>
            </div>
            <div className="bg-[var(--white)] border border-[var(--blue)] p-5 rounded-2xl text-center">
              <div className="font-bold text-[var(--blue)]">C - Livelihoods</div>
              <p className="text-sm text-[var(--blue)] mt-1">NGOs • Development • Food Security</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QuickNavigation