'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--blue)] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="">
              <div className=" ">
                <Image
                src='/images/logo.png'
                alt='logo'
                width={500}
                height={500}
                priority
                className='w-[50%] object-contain'
                />
              </div>
              <div>
                <p className="text-[var(--lightblue)] text-lg mt-4">International College of Research & Data Sciences</p>
              </div>
            </div>

            <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
              Advancing knowledge through excellence in research, data science, 
              and capacity building across Africa.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Stay updated with our latest research and programs</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 rounded-l-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:border-[var(--lightblue)] placeholder:text-gray-400"
                />
                <button className="bg-[var(--lightblue)] hover:bg-blue-600 px-6 rounded-r-xl font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Publications</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link></li>
              <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-lg mb-5">Get In Touch</h3>
            
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[var(--lightblue)]" />
                <div>
                  <p>Ilorin, Kwara State</p>
                  <p className="text-sm">Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--lightblue)]" />
                <Link href="mailto:info@icords-research.org" className="hover:text-white transition-colors">
                  info@icords-research.org
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[var(--lightblue)]" />
                <Link href="tel:+2348069517707" className="hover:text-white transition-colors">
                  +234 806 951 7707
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[var(--lightblue)] flex items-center justify-center rounded-full transition-all hover:scale-110">
                  <FaLinkedin />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[var(--lightblue)] flex items-center justify-center rounded-full transition-all hover:scale-110">
                  <FaTwitter />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[var(--lightblue)] flex items-center justify-center rounded-full transition-all hover:scale-110">
                  <FaFacebook />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[var(--lightblue)] flex items-center justify-center rounded-full transition-all hover:scale-110">
                  <FaInstagram />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[var(--lightblue)] flex items-center justify-center rounded-full transition-all hover:scale-110">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {currentYear} ICORDS Research. All Rights Reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <p className="mt-4 md:mt-0 flex gap-2 items-center">Designed with <FaHeart className='text-red-600'/> for Excellence in Research</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer