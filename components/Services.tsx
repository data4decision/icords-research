'use client'
import React from 'react'
import { FaFile, FaGraduationCap, FaLock, FaQuestion, FaQuestionCircle, FaTrophy } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const Services = () => {

    const services = [
        {id: 1,
         icon: FaGraduationCap,
         title: "Data Management Solutions",
         text: "Providing guidance on best practices for data collection, storage, and management to ensure data integrity and accessibility."
        },
        {id: 2,
         icon: FaCartShopping,
         title: "Training and Capacity Building",
         text: "Offering workshops and training sessions to enhance skills in data science, research methods, and analytical tools."
        },
         {id: 3,
         icon: FaQuestionCircle,
         title: "Project Evaluation and Impact Assessment",
         text: "Conducting thorough evaluations to assess the effectiveness and impact of projects, programs, or policies."
        },
         {id: 4,
         icon: FaLock,
         title: "Data Analysis and Interpretation",
         text: "Providing expertise in statistical analysis, data mining, and interpretation to derive meaningful insights from complex datasets."
        },
         {id: 5,
         icon: FaFile,
         title: "Research Design and Methodology",
         text: "Assisting in crafting robust research frameworks and selecting appropriate methodologies to ensure the validity and reliability of findings."
        },
        {id: 6,
         icon: FaTrophy,
         title: "Policy Development and Advisory",
         text: "Advising on the formulation of data-driven policies and strategies to inform decision-making processes.."
        },
    ]
  return (
    <div className="py-20">
        <div className='max-w-7xl m-auto '>
        <h1 className='sm:text-3xl text-xl text-center text-[var(--orange)] font-extrabold'>Our Services</h1>
    </div>
    {/* Services */}
     <div className="grid sm:grid-cols-3 grid-cols-1 max-w-7xl m-auto gap-5 mt-10 px-5">
        {services.map(({ id, icon: Icon, title, text })=>(
            <div key={id} className="">
                 <div className="  ">
                    <div className="flex gap-3 items-center">
                    <Icon className=' text-[var(--white)] bg-[var(--orange)] px-2 py-2 rounded-lg w-30 h-15' />
                  <div className="">
                     <h2 className="sm:text-lg text-md font-bold mt-4 text-[var(--blue)]">{title}</h2>
                      <p className="text-[var(--blue)] text-sm mt-2">{text}</p>
                  </div>
                   </div>
                 
                 </div>
              </div>
        ))}
     </div>

    </div>
  )
}

export default Services