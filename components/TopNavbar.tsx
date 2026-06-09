'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebook, FaGooglePlusG, FaLinkedinIn, FaLock, FaTwitter } from 'react-icons/fa'

const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Open on hover
    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    // Click outside handler - only way to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className='bg-[var(--blue)] md:flex md:flex-row flex-col items-center sm:justify-between px-8 sm:px-30  py-3 z-50 relative'>
            {/* Logo */}
            <div className="flex items-center gap-2 text-[var(--white)]">
                <Image
                    src="/images/logo.png"
                    alt="icords-logo"
                    width={30}
                    height={30}
                    priority
                />
                <h1 className='text-[var(--white)] text-sm'>Understanding and Development</h1>
            </div>

            {/* Social + Login */}
            <div className="flex items-center gap-5">
                {/* Social Icons */}
                <div className="text-[var(--white)]">
                    <ul className='flex items-center gap-4'>
                        <li><FaFacebook /></li>
                        <li><FaTwitter /></li>
                        <li><FaGooglePlusG /></li>
                        <li><FaLinkedinIn /></li>
                    </ul>
                </div>

                {/* Login Dropdown */}
                <div 
                    ref={dropdownRef}
                    className="relative inline-block"
                    onMouseEnter={handleMouseEnter}
                >
                    <h2 className='flex items-center gap-1 text-[var(--white)] text-md cursor-pointer hover:text-orange-400 transition-colors'>
                        <FaLock size={12} />
                        Login & Register
                    </h2>

                    {/* Dropdown */}
                    {isOpen && (
                        <div className="absolute top-10 sm:left-0 -left-10 sm:w-60 w-50 border border-[var(--gray)] shadow-xl bg-[var(--white)] px-5 py-6 z-[60]">
                            <form className="flex flex-col gap-4">
                                <label className='text-[var(--gray)] font-medium'>Login Area</label>

                                <input
                                    type="text"
                                    value={userName}
                                    placeholder='User Name'
                                    onChange={(e) => setUserName(e.target.value)}
                                    className='block w-full border border-[var(--gray)] bg-[var(--white)] text-[var(--blue)] px-3 py-2 focus:outline-none focus:border-[var(--blue)]'
                                />

                                <input
                                    type="password"
                                    value={password}
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='block w-full border border-[var(--gray)] bg-[var(--white)] text-[var(--blue)] px-3 py-2 focus:outline-none focus:border-[var(--blue)]'
                                />

                                <button
                                    onClick={(e) => { e.preventDefault(); /* handleLogin logic */ }}
                                    className="bg-[var(--blue)] text-white py-2.5 font-medium hover:bg-blue-700 transition"
                                >
                                    Login
                                </button>

                                <hr className="border-[var(--gray)] my-2" />

                                <Link 
                                    href='/signup'
                                    className='text-[var(--gray)] underline hover:text-blue-600 text-center block'
                                >
                                    Create an account
                                </Link>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopNavbar