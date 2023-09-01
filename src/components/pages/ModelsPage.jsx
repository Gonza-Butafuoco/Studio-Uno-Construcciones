import React from 'react'
import Modelscontainer from '../organisms/Modelscontainer'

export const ModelsPage = () => {
  return (
    <div>
      <body>
    <div className='flex flex-col items-center justify-center bg-sky-200 bg-cover bg-fixed overflow-hidden'>
      <h1 className="text-6xl font-bold animate-pulse mt-10 mb-10 bg-gradient-to-r text-transparent from-blue-600 via-cyan-600-600 to-sky-600 bg-clip-text  ">Modelos</h1>
      <Modelscontainer />
    </div> 
      </body>
    </div>
  )
}
