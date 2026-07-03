"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const slides = [
  {
    bg: "/upload/xslider_new_02.jpg.pagespeed.ic.QHr4wT-HDB.jpg",
    title: "YOU CAN ALSO BE AN EXPERT",
    text: "Understanding & Development Researcher Softwares!",
    link: "/signup"
  },
  {
    bg: "/upload/xslider_new_03.jpg.pagespeed.ic.0dDeZb1yS7.jpg",
    image: "/images/apple-touch-icon-57x57.png",
    title: "ICORDS-RESEARCH",
    text: "International College of Research and Data Science",
    link: "/subscribe",
    link2: "/read-more"
  },
  {
    bg: "/upload/xslider_new_01.jpg.pagespeed.ic.RgCY2ieSzC.jpg",
    image: "/images/apple-touch-icon-57x57.png",
    title: "ICORDS",
    text: "Develop yourself in relevant Skills",
    link: "/start-learning"
  }
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  // Autoplay
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 10000)
    return () => clearInterval(interval)
  }, [isPaused])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd

    if (distance > minSwipeDistance) nextSlide()
    if (distance < -minSwipeDistance) prevSlide()
  }

  const slide = slides[current]

  return (
    <div
      className="relative w-full md:h-[600px] h-[250px]  overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.bg}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.bg}
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-[var(--white)]"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-[var(--white)]"
      >
        <FaChevronRight />
      </button>

      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Slide 1 */}
            {current === 0 && (
              <div className="text-center space-y-4">
                <h1 className="sm:text-4xl text-xl font-bold">{slide.title}</h1>
                <p className="sm:text-lg text-sm">{slide.text}</p>
                <Link href={slide.link} className="bg-[var(--orange)] px-4 py-2 rounded text-sm">
                  Get Started
                </Link>
              </div>
            )}

            {/* Slide 2 */}
            {current === 1 && (
              <div className="flex flex-col items-center text-center space-y-4">
                <Image
                  src={slide.image!}
                  alt="logo"
                  width={80}
                  height={80}
                  className="bg-[var(--white)] rounded-full sm:p-4 p-2 sm:w-20 sm:h-20 w-15 h-15"
                />
                <h1 className="bg-[var(--white)] text-[var(--gray)] p-3 md:text-4xl text-xl font-bold">
                  {slide.title}
                </h1>
                <p>{slide.text}</p>
                <div className="flex gap-3 sm:text-xl text-sm ">
                  <Link href={slide.link} className="bg-blue-300 hover:bg-blue-200 px-4 py-2 rounded">
                    Subscribe Now
                  </Link>
                  <Link href={slide.link2!} className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-[var(--white)] font-bold px-4 py-2 rounded">
                    Read More About
                  </Link>
                </div>
              </div>
            )}

            {/* Slide 3 */}
            {current === 2 && (
              <div className="flex flex-col justify-center items-center sm:gap-10 gap-5">
                <div className="flex items-center gap-1.5 bg-[var(--white)] sm:px-4 px-1 sm:py-2 py-1">
                  <Image
                    src={slide.image!}
                    alt="logo"
                    width={50}
                    height={50}
                    className="sm:w-20 sm:h-20 w-10 h-10"
                  />
                  <h1 className="sm:text-4xl text-xl  font-bold text-[var(--gray)]">
                    {slide.title}
                  </h1>
                </div>

                <div className="flex flex-col justify-center items-center gap-5">
                  <p className="mt-2 sm:text-3xl text-xl">{slide.text}</p>
                  <Link
                    href={slide.link}
                    className="inline-block mt-4 bg-[var(--orange)] hover:bg-[var(--orange)]/90 px-4 py-2 rounded font-bold"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}