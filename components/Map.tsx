import React from 'react'

const Map = () => {
  return (
    <div className='sm:py-30 py-10 bg-[var(--white)]'>
        <h3 className='text-[var(--blue)] sm:text-2xl text-lg font-semibold px-10'>Our Location</h3>
        <h1 className='text-[var(--blue)] sm:text-3xl text-xl font-bold px-10'>Icords-research</h1>
      

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.752805329612!2d4.5962311!3d8.523363699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d55f8ab5c77%3A0xb00ee51d52919afa!2sAyotmide%20Petrol%20Station!5e0!3m2!1sen!2sng!4v1779099315997!5m2!1sen!2sng" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full sm:h-[600px] h-[200px]'></iframe>
    </div>
  )
}

export default Map