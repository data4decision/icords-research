'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
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
    <div className="bg-[var(--blue)]">
        <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="sm:text-3xl text-xl font-bold text-[var(--white)] mb-3">Get In Touch</h1>
        <p className="text-[var(--orange)] sm:text-lg text-sm">
          We&apos;d love to hear from you. Send us a message!
        </p>
      </div>

      <div className="bg-white border border-[var(--gray)]/10 rounded-2xl shadow-sm p-8 md:p-10">
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

      <p className="text-center text-[var(--orange)] text-sm mt-8">
        We typically respond within 24-48 hours.
      </p>
    </div>
    </div>
  );
};