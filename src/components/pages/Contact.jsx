import React from 'react'

export const Contact = () => {
  return (
    <div className='w-full h-screen bg-[url("https://i.imgur.com/O1kPyxm.png")] bg-cover bg-fixed overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text mb-8 text-center">
          ¡Contactanos!
        </h1>
        <p className="font-space-grotesk text-xl md:text-5xl text-center bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text">
          ¡Si te interesan algunas de nuestras propuestas no dudes en llamarnos!<br/> <br/>
          Dirección: Av Sarmiento 2615<br/><br/>
          Telefono Fijo: 3329 435572 <br/><br/>
          Celular: 3329 623073 
        </p>
      </div>
    </div>
  )
}
