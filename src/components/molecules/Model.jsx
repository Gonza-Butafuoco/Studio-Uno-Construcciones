import React from 'react'



export const Model = ({titulo , imagen , descripcion,  }) => {
  return (
    <div className=" bg-white border-2 border-black">
    <img src={imagen} alt={titulo}  className=' h-96 w-full ' />
    <h2 className='text-base font-bold text-black'>{titulo}</h2>
    <p className='text-sm font-medium text-black'>{descripcion}</p>

    </div>
  )
}

export default Model