'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEnvelope, FaLink, FaPhone } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa6'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log('Form submitted:', formData)
        alert('Thank you! Your message has been sent.') // temporary
    }

    return (
        <div className="max-w-6xl mx-auto px-6 sm:py-20 py-10">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--gray)] mb-4">
                    Get In Touch
                </h1>
                <p className="sm:text-lg text-sm text-[var(--gray)]/60 max-w-md mx-auto">
                    We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <div className="bg-white border border-[var(--gray)]/10 rounded-xl p-8 shadow-sm">
                        <h2 className="sm:text-2xl text-xl font-semibold text-[var(--gray)] mb-6">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--gray)] mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl focus:outline-none focus:border-[var(--blue)] transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--gray)] mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@gmail.com"
                                        className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl focus:outline-none focus:border-[var(--blue)] transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--gray)] mb-2">
                                    Website (optional)
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="https://data4decision.org"
                                    className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl focus:outline-none focus:border-[var(--blue)] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--gray)] mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl focus:outline-none focus:border-[var(--blue)] transition-colors resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--lightblue)] hover:bg-[var(--blue)] text-white font-medium py-4 rounded-xl transition-all duration-200 active:scale-[0.985]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-[var(--gray)]/10 rounded-2xl p-8 shadow-sm h-full">
                        <h2 className="sm:text-xl text-lg font-semibold text-[var(--gray)] mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[var(--lightblue)]/10 flex items-center justify-center flex-shrink-0">
                                    <FaLink size={20} className="text-[var(--lightblue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--gray)] sm:text-lg text-sm">Website</p>
                                    <Link 
                                        href="https://www.icords-research.org/" 
                                        target="_blank"
                                        className="text-[var(--gray)]/70 hover:text-[var(--lightblue)] sm:text-lg text-sm transition-colors"
                                    >
                                        www.icords-research.org
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[var(--lightblue)]/10 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope size={20} className="text-[var(--lightblue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--gray)] sm:text-lg text-sm">Email</p>
                                    <Link 
                                        href="mailto:info@icords-research.org"
                                        className="text-[var(--gray)]/70 hover:text-[var(--lightblue)] sm:text-lg text-sm transition-colors"
                                    >
                                        info@icords-research.org
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[var(--lightblue)]/10 flex items-center justify-center flex-shrink-0">
                                    <FaPhone size={20} className="text-[var(--lightblue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--gray)] sm:text-lg text-sm">Phone</p>
                                    <a 
                                        href="tel:+2348069517707"
                                        className="text-[var(--gray)]/70 hover:text-[var(--lightblue)] sm:text-lg text-sm transition-colors"
                                    >
                                        +234 806 951 7707
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[var(--lightblue)]/10 flex items-center justify-center flex-shrink-0">
                                    <FaHouseUser size={20} className="text-[var(--lightblue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--gray)] sm:text-lg text-sm">Address</p>
                                    <p className="text-[var(--gray)]/70 sm:text-lg text-sm">
                                        Ilorin, Kwara State, Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact