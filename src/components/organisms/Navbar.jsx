import React from 'react'
import ButtonSection from '../molecules/ButtonSection'
import svgimage from "../Resources/Logotipo-prueba-Estudio-uno.svg"

function Navbar() {
  return (
    <div className='bg-transparent '>
        <nav className=' flex  border  border-black'>
            <div>
                <img src={svgimage} alt="logo" className=' p-2 m-2 h-20 w-20' />
            </div>
            <div className=' flex  mx-auto '>
                <ButtonSection/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

