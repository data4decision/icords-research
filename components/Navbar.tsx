'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    // Close mobile menu when route changes (optional)
    // useEffect(() => { setIsOpen(false) }, [pathname])

    const toggleDropdown = (dropdown: string) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null)
        } else {
            setOpenDropdown(dropdown)
        }
    }

    return (
        <div className="relative z-50">
            {/* Desktop Navbar */}
            <div className='hidden lg:flex absolute top-4 w-full px-8 justify-between items-center bg-[var(--white)]/30 backdrop-blur-md'>
                {/* Logo */}
                <div>
                    <Image
                        src='/images/logo.png'
                        alt='ICORDS Logo'
                        width={60}
                        height={60}
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <div>
                    <ul className='flex gap-6 items-center text-[var(--blue)] font-medium'>
                        <li><Link href="/" className='hover:text-[var(--orange)] transition-colors'>Home</Link></li>
                        <li><Link href="/about" className='hover:text-[var(--orange)] transition-colors'>About</Link></li>

                        {/* Courses Dropdown */}
                        {/* Courses Dropdown - Desktop */}
<li className="relative group">
    <div className='flex items-center gap-1 hover:text-[var(--orange)] transition-colors px-3 py-2 cursor-pointer'>
        Courses <FaChevronDown size={14} />
    </div>
    <ul className='absolute left-0 top-full mt-2 bg-[var(--orange)] shadow-xl rounded-xl py-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100'>
        <li><Link href="/courses" className='block px-6 py-3 hover:bg-gray-50 text-[var(--white)] hover:text-[var(--orange)]'>All Courses Overview</Link></li>
        <li><Link href="/courses/tier-1" className='block px-6 py-3 hover:bg-[var(--orange)]/90 text-[var(--white)]'>Tier 1 - Diploma (Dip.RL)</Link></li>
        <li><Link href="/courses/tier-2" className='block px-6 py-3 hover:bg-[var(--orange)]/90 text-[var(--white)]'>Tier 2 - Master (M.RL)</Link></li>
        <li><Link href="/courses/tier-3" className='block px-6 py-3 hover:bg-[var(--orange)]/90 text-[var(--white)]'>Tier 3 - Doctorate (D.RL)</Link></li>
         <li><Link href="/courses/course5" className='block px-6 py-3 hover:bg-[var(--orange)]/90 text-[var(--white)]'>Software Applications</Link></li>
        <li className="border-t border-[var(--blue)] my-2"></li>
        <li><Link href="#" className='block px-6 py-3 hover:bg-[var(--orange)]/90 text-[var(--white)]'>Milestones & Capstones</Link></li>
    </ul>
</li>

                        {/* Services Dropdown */}
                        <li className="relative group">
                            <div className='flex items-center gap-1 hover:text-[var(--orange)] transition-colors px-3 py-2 cursor-pointer'>
                                Our Services <FaChevronDown size={14} />
                            </div>
                            <ul className='absolute left-0 top-full mt-2 bg-[var(--orange)] text-white shadow-xl rounded-md py-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>
                                <li><Link href="/services" className='block px-5 py-2.5 hover:bg-white/20'>Our Services</Link></li>
                                <li><Link href="#" className='block px-5 py-2.5 hover:bg-white/20'>Data Bank</Link></li>
                                <li><Link href="#" className='block px-5 py-2.5 hover:bg-white/20'>Publications</Link></li>
                            </ul>
                        </li>

                        <li><Link href="#" className='hover:text-[var(--orange)] transition-colors'>Publications</Link></li>
                        <li><Link href="/contact" className='hover:text-[var(--orange)] transition-colors'>Contact</Link></li>
                    </ul>
                </div>

                {/* Register Button */}
                <Link 
                    href="https://forms.gle/QHAzXKfzoikMNh8W9" 
                    className='flex items-center gap-2 bg-[var(--orange)] hover:bg-orange-600 px-5 py-2.5 rounded-md text-white text-sm font-medium transition-all'
                >
                    <FaSignOutAlt />
                    Register Now
                </Link>
            </div>

            {/* ====================== MOBILE NAVBAR ====================== */}
            <div className="lg:hidden">
                <div className="absolute top-6 w-full px-6 flex justify-between items-center z-50">
                    {/* Logo */}
                    <Image
                        src='/images/logo.png'
                        alt='ICORDS Logo'
                        width={50}
                        height={55}
                        priority
                    />

                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-2xl text-[var(--blue)]"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="fixed inset-0 bg-[var(--white)] z-50 pt-24 px-6 overflow-auto">
                        <ul className="flex flex-col text-lg font-medium text-[var(--blue)]">
                            <li className="border-b border-[var(--orange)]">
                                <Link href="/" className="block py-4" onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li className="border-b border-[var(--orange)]">
                                <Link href="/about" className="block py-4" onClick={() => setIsOpen(false)}>About</Link>
                            </li>

                            {/* Courses Dropdown - Mobile */}
                            <li className="border-b border-[var(--orange)]">
                                <button 
                                    onClick={() => toggleDropdown('courses')}
                                    className="w-full flex justify-between items-center py-4 text-left"
                                >
                                    Courses
                                    <FaChevronDown className={`transition-transform ${openDropdown === 'courses' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'courses' && (
                                    <ul className="pl-6 pb-4 space-y-3 text-base ">
                                        <li><Link href="/courses" className='block px-6 py-3 border-b border-[var(--orange)]  text-[var(--blue)]'>All Courses Overview</Link></li>
                                        <li><Link href="/courses/tier-1" className='block px-6 py-3 border-b border-[var(--orange)]  text-[var(--blue)]'>Tier 1 - Diploma (Dip.RL)</Link></li>
                                        <li><Link href="/courses/tier-2" className='block px-6 py-3 border-b border-[var(--orange)] text-[var(--blue)]'>Tier 2 - Master (M.RL)</Link></li>
                                        <li><Link href="/courses/tier-3" className='block px-6 py-3 border-b border-[var(--orange)]  text-[var(--blue)]'>Tier 3 - Doctorate (D.RL)</Link></li>
                                        <li><Link href="/courses/course5" className='block px-6 py-3 hover:bg-[var(--orange)]/90 text-[var(--white)]'>Software Applications</Link></li>
                                        {/* <li className="border-t border-[var(--blue)] my-2"></li> */}
                                        <li><Link href="#" className='block px-6 py-3 text-[var(--blue)]'>Milestones & Capstones</Link></li>
                                    </ul>
                                )}
                            </li>

                            {/* Services Dropdown - Mobile */}
                            <li className="border-b border-[var(--orange)]">
                                <button 
                                    onClick={() => toggleDropdown('services')}
                                    className="w-full flex justify-between items-center py-4 text-left"
                                >
                                    Our Services
                                    <FaChevronDown className={`transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'services' && (
                                    <ul className="pl-6 pb-4 space-y-3 text-base">
                                        <li><Link href="/services" className="block py-1" onClick={() => setIsOpen(false)}>Our Services</Link></li>
                                        <li><Link href="#" className="block py-1" onClick={() => setIsOpen(false)}>Data Bank</Link></li>
                                        <li><Link href="#" className="block py-1" onClick={() => setIsOpen(false)}>Publications</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li className="border-b border-[var(--orange)]">
                                <Link href="#" className="block py-4" onClick={() => setIsOpen(false)}>Publications</Link>
                            </li>
                            <li className="border-b border-[var(--orange)]">
                                <Link href="/contact" className="block py-4" onClick={() => setIsOpen(false)}>Contact</Link>
                            </li>

                            {/* Register Button - Mobile */}
                            <li className="mt-8">
                                <Link 
                                    href="https://forms.gle/QHAzXKfzoikMNh8W9"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-3 bg-[var(--orange)] text-white font-semibold py-4 rounded-xl text-base"
                                >
                                    <FaSignOutAlt />
                                    Register Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar