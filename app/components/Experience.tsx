'use client'
import { p } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


const Experience = () => {
    const [openItem, setOpenItem] = useState<Record<number, boolean>>({})
    const toggleItem = (index: number) => {
        setOpenItem (prev => ({...prev, [index]: !prev[index] }))
    }
    const faq = [
    {
        id: 1,
        question: 'WHY ICORDS-RESEARCH INSTITUTE?',
        answer: 'ICORDS-Research Institute is committed to advancing research, data science, and evidence-based decision-making through expert consultancy, professional training, and internationally relevant certification programs. Our team of experienced PhD and Master’s degree holders provides practical and innovative solutions tailored to sectors such as health, agriculture, education, environmental development, and policy-making.'
    },
    {
        id: 2,
        question: 'WHAT IS ICORDS-RESEARCH INSTITUTE?',
        answer: 'The International College of Research and Data Science (ICORDS) is a leading institution focused on research excellence, data science, and capacity development. We empower researchers, professionals, organizations, and students with the knowledge, analytical skills, and research tools needed to succeed in a data-driven world.'
    },
    {
        id: 3,
        question: 'WHAT IS ICORDS-RESEARCH INSTITUTE SERVICE?',
        answer: 'ICORDS-Research Institute offers a wide range of services including research consultancy, data analysis, academic and professional training, certification programs, project evaluation, policy research, and evidence-based advisory services. Our solutions are designed to support individuals, institutions, and organizations in achieving impactful and data-informed outcomes.'
    },
]
  return (
    <div className='max-w-6xl sm:py-25 py-15 m-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-4">
            <div className="mx-5">
                <h3 className='text-[17px] sm:text-[20px] text-[var(--gray)] font-bold '>Why Choose Us</h3>
                <hr className='text-[var(--orange)] w-[50] mt-4'/>
                <div className="mt-4">
                    {faq.map((faq, index)=>(
                        <div key={index} className=" mb-4 last:mb-0">
                            <button onClick={()=> toggleItem(index)}
                                aria-expanded={!!openItem[index]}
                                aria-controls={`faq-${index}`}
                                className='flex items-center justify-between bg-[var(--gray)]/50 w-full px-5 py-1 '>
                                <span className='sm:text-[15px] text-[12px]'>{faq.question}</span>
                                {openItem[index] ? (
                                    <FaMinus size={18} className='bg-[var(--orange)] text-[var(--white)] p-1'/>
                                 ) : (
                                    <FaPlus  size={18} className='bg-[var(--orange)] text-[var(--white)] p-1'/>
                                )}
                            </button>
                            {/* Answer */}
                            {openItem[index] && (
                                <p className='sm:text-[12px] text-[10px] px-4 mt-1'>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-10">
                <h3 className='text-[17px] sm:text-[20px] text-[var(--gray)] font-bold '>Why Choose Us</h3>
                <hr className='text-[var(--orange)] w-[50] mt-4'/>
                <div className="">
                    <div className="flex items-center gap-1 mt-3">
                        <p className='font-bold sm:text-[15px] text-[12px]'>DataBank Projects</p>
                        <span className='flex items-center gap-1 sm:text-[15px] text-[12px]'>
                            <p>-</p>
                            <p>90%</p>
                        </span>
                    </div>
                        <div className="relative w-full mt-2">
                            {/* Gray background line */}
                            <div className="border-4 rounded-lg w-full border-[var(--gray)]/50"></div>

                            {/* Orange progress line */}
                            <div className="absolute top-0 left-0 border-4 rounded-lg w-[90%] border-[var(--orange)]"></div>
                        </div>
                    </div>
                    <div className="">
                    <div className="flex items-center gap-1 mt-3">
                        <p className='font-bold sm:text-[15px] text-[12px]'>Certification Program</p>
                        <span className='flex items-center gap-1 sm:text-[15px] text-[12px]'>
                            <p>-</p>
                            <p>95%</p>
                        </span>
                    </div>
                        <div className="relative w-full mt-2">
                            {/* Gray background line */}
                            <div className="border-4 rounded-lg w-full border-[var(--gray)]/50"></div>

                            {/* Orange progress line */}
                            <div className="absolute top-0 left-0 border-4 rounded-lg w-[95%] border-[var(--orange)]"></div>
                        </div>
                    </div>

                    <div className="">
                    <div className="flex items-center gap-1 mt-3">
                        <p className='font-bold sm:text-[15px] text-[12px]'>Consultancies</p>
                        <span className='flex items-center gap-1 sm:text-[15px] text-[12px]'>
                            <p>-</p>
                            <p>70%</p>
                        </span>
                    </div>
                        <div className="relative w-full mt-2">
                            {/* Gray background line */}
                            <div className="border-4 rounded-lg w-full border-[var(--gray)]/50"></div>

                            {/* Orange progress line */}
                            <div className="absolute top-0 left-0 border-4 rounded-lg w-[70%] border-[var(--orange)]"></div>
                        </div>
                    </div>

                    <div className="">
                    <div className="flex items-center gap-1 mt-3">
                        <p className='font-bold sm:text-[15px] text-[12px]'>Data Analysis</p>
                        <span className='flex items-center gap-1 sm:text-[15px] text-[12px]'>
                            <p>-</p>
                            <p>100%</p>
                        </span>
                    </div>
                        <div className="relative w-full mt-2">
                            {/* Gray background line */}
                            <div className="border-4 rounded-lg w-full border-[var(--gray)]/50"></div>

                            {/* Orange progress line */}
                            <div className="absolute top-0 left-0 border-4 rounded-lg w-[100%] border-[var(--orange)]"></div>
                        </div>
                    </div>
               </div>
               
           </div>
    </div>
  )
}

export default Experience