import React from 'react'
import Modelscontainer from '../organisms/Modelscontainer'

export const ModelsPage = () => {
  return (
    <div>
      <body>
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-blue-300">
      <h1 className="text-6xl font-bold animate-pulse mt-10 mb-10 text-black">Modelos</h1>
      <Modelscontainer />
    </div> 
      </body>
    </div>
  )
}
