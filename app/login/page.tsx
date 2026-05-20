'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="min-h-screen bg-[var(--blue)] flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                {/* Card */}
                <div className="bg-[var(--white)]  shadow-xl overflow-hidden">
                    
                    {/* Logo */}
                    <div className="pt-10 pb-6 flex justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="ICORDS Logo"
                            width={180}
                            height={70}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex border-b border-[var(--blue)]">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-4 text-lg font-semibold transition-all
                                ${isLogin 
                                    ? 'text-[var(--blue)] border-b-4 border-[var(--orange)]' 
                                    : 'text-[var(--blue)]/30 hover:text-[var(--blue)]/70'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-4 text-lg font-semibold transition-all
                                ${!isLogin 
                                    ? 'text-[var(--blue)] border-b-4 border-[var(--orange)]' 
                                    : 'text-[var(--blue)]/30 hover:text-[var(--blue)]/70'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form Container */}
                    <div className="p-8">
                        {isLogin ? (
                            /* ==================== LOGIN FORM ==================== */
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        placeholder="Username or Email"
                                        className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)] transition-colors"
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)] transition-colors"
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4 accent-[var(--blue)]" />
                                        <span className="text-[var(--blue)]">Remember me</span>
                                    </div>
                                    <a href="#" className="text-[var(--blue)] hover:underline">
                                        Forgot Password?
                                    </a>
                                </div>

                                <button className="w-full bg-[var(--orange)] hover:bg-[var(--orange)] text-[var(--white)] font-semibold py-4 rounded-2xl transition-all active:scale-95">
                                    Login Account
                                </button>
                            </div>
                        ) : (
                            /* ==================== SIGN UP FORM ==================== */
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="First Name"
                                        className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)]"
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Last Name"
                                        className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)]"
                                    />
                                </div>

                                <input 
                                    type="email" 
                                    placeholder="Email Address"
                                    className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)]"
                                />

                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)]"
                                />

                                <input 
                                    type="password" 
                                    placeholder="Create Password"
                                    className="w-full px-5 py-3 border border-[var(--orange)] rounded-xl focus:outline-none focus:border-[var(--blue)]"
                                />

                                <button className="w-full bg-[var(--orange)] hover:bg-[var(--orange)] text-[var(--white)] font-semibold py-4 rounded-2xl transition-all active:scale-95">
                                    Create Account
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Footer Text */}
                    <div className="text-center py-6 border-t text-sm text-[var(--blue)]">
                        {isLogin ? (
                            <p>Don&apos;t have an account? <span onClick={() => setIsLogin(false)} className="text-[var(--blue)] cursor-pointer hover:underline">Sign Up</span></p>
                        ) : (
                            <p>Already have an account? <span onClick={() => setIsLogin(true)} className="text-[var(--blue)] cursor-pointer hover:underline">Login</span></p>
                        )}
                    </div>
                </div>

                {/* Trust Text */}
                <p className="text-center text-[var(--white)]/70 text-sm mt-6">
                    © 2026 ICORDS Research • Secure Login
                </p>
            </div>
        </div>
    )
}

export default AuthPage