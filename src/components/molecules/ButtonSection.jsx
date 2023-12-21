import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeButton from '../atoms/HomeButton'
import ModelsButton from '../atoms/ModelsButton'
import AboutusButton from '../atoms/AboutusButton'



function ButtonSection() {
  return (
    <div className=' flex items-center  content-between gap-44 '>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg hover:text-white ease-in-out delay-150 duration-300'>
        <NavLink exact to="/">
          <HomeButton/>
        </NavLink>
        </div>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg hover:text-white ease-in-out delay-150 duration-300'>
        <NavLink to="/ModelsPage">
          <ModelsButton/>
        </NavLink>
        </div>
        <div className='px-4 py-2 font-semibold text-sm  text-black hover:-translate-y-1 hover:scale-110 hover:bg-black hover:rounded-lg  hover:text-white ease-in-out delay-150 duration-300'> 
        <NavLink to="/AboutUs">
          <AboutusButton/>
        </NavLink>
        </div>

    </div>
  )
}

export default ButtonSection