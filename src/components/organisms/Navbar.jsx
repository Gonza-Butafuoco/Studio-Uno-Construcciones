import React from 'react'
import { Link } from 'react-router-dom'
import ButtonSection from '../molecules/ButtonSection'
import svgimage from "../Resources/studiouno_logotipo.svg"

function Navbar() {
  return (
    <div className='sticky top-0 bg-white z-10 '>
        <nav className=' flex  border  border-black'>
            <div>
              <Link to="/">
                <img   src={svgimage} alt="logo" className=' p-2 m-2 h-20 w-20' />
              </Link>
            </div>
            <div className=' flex  mx-auto '>
                <ButtonSection/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

