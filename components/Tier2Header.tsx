import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Tier2Header = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/upload/xblog_01.jpg.pagespeed.ic.2jVY1j1OMe.jpg" 
        alt="ICORDS Tier 1 - Diploma in Research & Learning"
        width={1200}
        height={600}
        priority
        className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px] object-cover object-top"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/75" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 text-white">
            
            {/* Left Side - Main Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-[var(--blue)]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 shadow-sm">
                <FaStar className="text-[var(--orange)]" />
                <span className="font-semibold tracking-widest text-sm uppercase">TIER TWO - M.RL</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Master of Research & Learning 
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-[var(--orange)] font-medium">
                (M.RL) - Data Science
              </p>
            </div>

            {/* Right Side - Analytics Level */}
            {/* <div className="lg:text-right max-w-lg lg:max-w-md">
              
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--orange)] leading-none mt-1">
                ★ Analytics Level
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/95">
                Summarising, visualising, and communicating what the data shows
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tier2Header;