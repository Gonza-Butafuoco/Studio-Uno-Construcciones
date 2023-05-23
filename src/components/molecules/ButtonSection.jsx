import React from 'react'
import HomeButton from '../atoms/HomeButton'
import ModelsButton from '../atoms/ModelsButton'
import AboutusButton from '../atoms/AboutusButton'
import ContactButton from '../atoms/ContactButton'



function ButtonSection() {
  return (
    <div className=' flex items-center  content-between gap-44 '>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg hover:text-white ease-in-out delay-150 duration-300'>
        <HomeButton/>
        </div>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg hover:text-white ease-in-out delay-150 duration-300'>
        <ModelsButton/>
        </div>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg  hover:text-white ease-in-out delay-150 duration-300'> 
        <AboutusButton/>
        </div>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg hover:text-white ease-in-out delay-150 duration-300'>
        <ContactButton/>
        </div>




    </div>
  )
}

export default ButtonSection