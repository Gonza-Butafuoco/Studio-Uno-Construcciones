import React from 'react'



export const Model = ({titulo , imagen , descripcion, medidas  }) => {
  return (
    <div className=" border-2 border-black">
    <img src={imagen} alt={titulo}  className=' h-96 w-full ' />
    <h2 className='text-base font-bold text-black'>{titulo}</h2>
    <p className='text-sm font-medium text-black'>{descripcion}</p>
  <div className='flex justify-between gap-0.5'>
    <p className='text-xs font-semibold text-black'>{medidas}</p>
  </div>
    </div>
  )
}

export default Model