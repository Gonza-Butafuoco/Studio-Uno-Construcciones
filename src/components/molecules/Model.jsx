import React from 'react'



export const Model = ({titulo , imagen , descripcion,  }) => {
  return (
    <div className="mb-3 bg-white border border-gray-300 rounded-lg shadow h-[515px]">
    <img src={imagen} alt={titulo}  className=' h-96 w-full rounded-t-lg' />
    <hr/>
    <h2 className='text-center mb-2 text-lg font-bold tracking-tight text-black'>{titulo}</h2>
    <p className='text-sm mx-2 text-gray-900 font-medium '>{descripcion}</p>

    </div>
  )
}

export default Model