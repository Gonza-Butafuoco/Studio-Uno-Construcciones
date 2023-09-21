import React from 'react'
import Modelscontainer from '../organisms/Modelscontainer'
import "../pages/animaciones.css"

export const ModelsPage = () => {
  return (
    <div>
      <body>
    <div className='flex flex-col items-center justify-center bg-slate-100 bg-cover bg-fixed overflow-hidden tracking-in-expand'>
      <h1 className="text-6xl font-bold animate-pulse mt-10 mb-10 bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text ">Modelos</h1>
      <Modelscontainer />
    </div> 
      </body>
    </div>
  )
}
