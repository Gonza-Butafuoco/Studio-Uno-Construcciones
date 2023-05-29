import React from 'react'
import Modelscontainer from '../organisms/Modelscontainer'

export const ModelsPage = () => {
  return (
    <div>
      <body>
    <div className="flex flex-col items-center justify-center  bg-white">
      <h1 className="text-6xl font-bold animate-pulse mt-10 mb-10">Modelos</h1>
      <Modelscontainer />
    </div> 
      </body>
    </div>
  )
}
