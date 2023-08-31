import React from 'react'
import Modelscontainer from '../organisms/Modelscontainer'

export const ModelsPage = () => {
  return (
    <div>
      <body>
    <div className='flex flex-col items-center justify-center bg-[url("https://i.imgur.com/O1kPyxm.png")] bg-cover bg-fixed overflow-hidden'>
      <h1 className="text-6xl font-bold animate-pulse mt-10 mb-10 bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text mb-8 ">Modelos</h1>
      <Modelscontainer />
    </div> 
      </body>
    </div>
  )
}
