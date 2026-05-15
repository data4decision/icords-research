'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { FaArrowDown, FaChevronDown, FaRegistered, FaSignOutAlt } from 'react-icons/fa'

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Open dropdown on hover
    const handleMouseEnter = (dropdown: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setOpenDropdown(dropdown)
    }

    // Close with delay on mouse leave
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null)
        }, 300) // ← Adjust delay here (in ms)
    }

    // Optional: Click outside to close immediately
    useEffect(() => {
        const handleClickOutside = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
            setOpenDropdown(null)
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <div className='absolute top-25 flex justify-between items-center z-[60] w-full px-8'>
            {/* Logo */}
            <div>
                <Image
                    src='/images/logo2.png'
                    alt='Navbar logo'
                    width={180}
                    height={60}
                    priority
                />
            </div>

            {/* Navigation */}
            <div>
                <ul className='flex gap-6 items-center text-black'>
                    <li>
                        <Link href="/" className='hover:text-[var(--orange)] transition-colors'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className='hover:text-[var(--orange)] transition-colors'>
                            About
                        </Link>
                    </li>

                    {/* ==================== COURSES DROPDOWN ==================== */}
                    <li 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('courses')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link 
                            href="/" 
                            className='flex items-center gap-1 hover:text-[var(--orange)] transition-colors px-3 py-2 rounded-lg'
                        >
                            Courses
                            <FaChevronDown size={14} />
                        </Link>

                        {openDropdown === 'courses' && (
                            <ul className='absolute left-0 top-full mt-2 bg-[var(--orange)] text-white shadow-lg rounded-md py-3 w-48 z-50'>
                                <li>
                                    <Link href="/" className='block px-5 py-2 hover:bg-white/20'>All Courses</Link>
                                </li>
                                <li>
                                    <Link href="/" className='block px-5 py-2 hover:bg-white/20'>Milestone</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* ==================== FEATURES DROPDOWN ==================== */}
                    <li 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('features')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link 
                            href="/" 
                            className='flex items-center gap-1 hover:text-[var(--orange)] transition-colors px-3 py-2 rounded-lg'
                        >
                            Features
                            <FaChevronDown size={14} />
                        </Link>

                        {openDropdown === 'features' && (
                            <ul className='absolute left-0 top-full mt-2 bg-[var(--orange)] text-white shadow-lg rounded-md py-3 w-52 z-50'>
                                <li>
                                    <Link href="/" className='block px-5 py-2 hover:bg-white/20'>Our Service</Link>
                                </li>
                                <li>
                                    <Link href="/" className='block px-5 py-2 hover:bg-white/20'>Data Bank</Link>
                                </li>
                                <li>
                                    <Link href="/" className='block px-5 py-2 hover:bg-white/20'>Publication</Link>
                                </li>
                            </ul>         
                        )}
                        
                    </li>
                    <li>
                        <Link href="/" className='hover:text-[var(--orange)] transition-colors'>
                            Publications
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className='hover:text-[var(--orange)] transition-colors'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <Link href="/" className='flex gap-2 bg-[var(--orange)] px-2 py-1 rounded-sm items-center text-[var(--white)] text-sm transition-colors'>
                            <FaSignOutAlt className='text-[var(--white)]'/>
                            Register Now
                        </Link>
            </div>
        </div>
    )
}

export default Navbar