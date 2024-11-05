import { imgPath } from '@/components/helpers/functions-general'
import { Plus } from 'lucide-react'
import React from 'react'

const Dessert = () => {
  return (
    <section className='bg-[#fdf7ef]'>
      <img src={`${imgPath}/michi-dessert.webp`} alt="" className='w-full object-cover'/>
      <div className='container py-24'>
      <h2 className='text-center uppercase text-accent'>Sides & Dessert</h2>
      <div className='grid grid-cols-3 gap-10 mt-16'>
        <div className='grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black'>
        <div>
          <h5 className='mb-0 text-black'>Edamame</h5>
          <small>Boiled and salted soybean pods</small>
        </div>
        <p className='font-bold text-2xl justify-self-center'>200</p>
        <button className='size-[40px] bg-accent text-white justify-self-center rounded-md px-2 py-1.5'><Plus/></button>
        </div>
  
      </div>
      </div>
    </section>
  )
}

export default Dessert