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
      {/* <Link
        href="/courses"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        ← All Courses
      </Link> */}

      {/* Current Tier - Highlighted Orange */}
      {/* <button className="px-6 py-3 bg-[var(--orange)] text-white rounded-full text-sm font-medium shadow cursor-default">
        Tier 1 - LS-01
      </button> */}
      <Link
        href="/courses/course5"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/course5')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Ordinary Level
      </Link>

      {/* LS-02 */}
      <Link
        href="/courses/course5Two"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/course5Two')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
       Associate Level
      </Link>

      {/* LS-03 */}
      {/* <Link
        href="/courses/tier-1/LS-03"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/tier-1/LS-03')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Tier 1 - LS-03
      </Link> */}

      {/* <Link
        href="/courses/tier-1/LS-04"
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          isActive('/courses/tier-1/LS-04')
            ? 'bg-[var(--blue)] text-white shadow-lg shadow-blue-500/30'
            : 'bg-white border border-gray-200 text-[var(--blue)] hover:bg-gray-100'
        }`}
      >
        Tier 1 - LS-04
      </Link> */}
    </div>

        
    </div>
  )
}

export default QuickNavigation