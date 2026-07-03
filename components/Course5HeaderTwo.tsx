
import Image from 'next/image'
import React from 'react'

const Course5HeaderTwo = () => {
  return (
    <div className="font-roboto  z-10">
        <div className="relative">
            <Image
            src="/images/hero1.jpg"
            alt="Artismart"
            width={1200}
            height={100}
            className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px] object-cover object-center"
            priority
            />
        </div>
        <div className="absolute  top-1/2 -translate-y-1/2 px-4 ">
            <h1 className='lg:text-xl md:text-md text-xs text-[var(--blue)] font-bold bg-[var(--white)] w-[400px] sm:ml-20 ml-10  px-4 py-3 rounded-lg border-b-3 border-r-0 border-l-0 border-t-0 border-[var(--blue)] inline-block  '>
            Associate Level -  Software Application
            </h1>
            <p className='bg-[var(--blue)] text-[var(--white)] lg:text-xl md:text-md text-xs sm:ml-20  font-semibold mt-3 rounded-lg border-b-3 border-r-0 border-l-0 border-t-0 border-[var(--orange)] px-4 py-4'>For individuals with some prior tool experience, or who have completed the Ordinary level. Goes deeper</p>
           
        </div>
    </div>
  )
}

export default Course5HeaderTwo