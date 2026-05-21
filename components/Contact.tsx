'use client'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { FaEnvelope, FaLink, FaPhone } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa6'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    setStatus(null);

    emailjs.sendForm(
      'service_4205i0q', 
      'template_ahevoqe', 
      form.current, 
      'YdXH7zCJtfM6CuSxE'
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus({ type: 'success', message: 'Your message has been sent successfully! 🎉' });
        form.current?.reset();
    })
    .catch((error) => {
        console.log('FAILED...', error.text);
        setStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again later.' 
        });
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
    return (
        <div className="max-w-6xl mx-auto px-6 sm:py-20 py-10">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-4">
                    Get In Touch
                </h1>
                <p className="sm:text-lg text-sm text-[var(--blue)]/60 max-w-md mx-auto">
                    We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <div className="bg-white border border-[var(--gray)]/10 rounded-xl p-8 shadow-sm">
                        <h2 className="sm:text-2xl text-xl font-semibold text-[var(--blue)] mb-6">Send us a Message</h2>

                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--blue)] mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="user_name" 
                required
                className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl text-[var(--blue)] focus:outline-none focus:border-[var(--lightblue)] transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--blue)] mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                name="user_email" 
                required
                className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl text-[var(--blue)] focus:outline-none focus:border-[var(--lightblue)] transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--blue)] mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea 
              name="message" 
              required
              rows={7}
              className="w-full px-4 py-3 border border-[var(--gray)]/30 rounded-xl text-[var(--blue)] focus:outline-none focus:border-[var(--lightblue)] transition-colors resize-y"
              placeholder="How can we help you today?"
            />
          </div>

          {/* Status Message */}
          {status && (
            <div className={`p-4 rounded-xl text-sm font-medium ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[var(--lightblue)] hover:bg-[var(--blue)] disabled:bg-[var(--orange)] text-[var(--white)] font-semibold py-4 rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                Sending Message...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-[var(--gray)]/10 rounded-2xl p-8 shadow-sm h-full">
                        <h2 className="sm:text-xl text-lg font-semibold text-[var(--blue)] mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[var(--lightblue)]/10 flex items-center justify-center flex-shrink-0">
                                    <FaLink size={20} className="text-[var(--lightblue)]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--blue)] sm:text-lg text-sm">Website</p>
                                    <Link 
                                        href="https://www.icords-research.org/" 
                                        target="_blank"
                                        className="text-[var(--blue)]/70 hover:text-[var(--lightblue)] sm:text-lg text-sm transition-colors"
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
                                    <p className="font-medium text-[var(--blue)] sm:text-lg text-sm">Email</p>
                                    <Link 
                                        href="mailto:info@icords-research.org"
                                        className="text-[var(--blue)]/70 hover:text-[var(--lightblue)] sm:text-lg text-sm transition-colors"
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
                                    <p className="font-medium text-[var(--blue)] sm:text-lg text-sm">Phone</p>
                                    <a 
                                        href="tel:+2348069517707"
                                        className="text-[var(--blue)]/70 hover:text-[var(--lightblue)] sm:text-lg text-sm transition-colors"
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
                                    <p className="font-medium text-[var(--blue)] sm:text-lg text-sm">Address</p>
                                    <p className="text-[var(--blue)]/70 sm:text-lg text-sm">
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