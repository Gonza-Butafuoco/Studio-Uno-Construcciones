import React from "react";
import "../pages/animaciones.css"

export const AboutUs = () => {
  return (
    <div className='w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center tracking-in-expand" >
          Acerca de nosotros
        </h1>
        <p className="font-space-grotesk text-xl  md:text-3xl md:mx-40 text-center bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand ">
          Studio Uno Construcciones es una destacada empresa en el sector de la
          construcción de casas prefabricadas. Con años de experiencia en el
          mercado, nos enorgullece ofrecer soluciones habitacionales de alta
          calidad y diseño innovador. Nuestra misión es brindar hogares
          funcionales y estéticamente atractivos a un precio accesible.
        </p>
        <h1 className="font-space-grotesk text-5xl md:text-7xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mt-20 text-center tracking-in-expand">
          ¡Contactanos!
        </h1>
        <p className="font-space-grotesk mt-1 mb-5 text-xl md:text-3xl text-center bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text tracking-in-expand">
          ¡Si te interesan algunas de nuestras propuestas no dudes en llamarnos!<br/> <br/>
          Dirección: Av Sarmiento 2615<br/><br/>
          Telefono Fijo: 3329 435572 <br/><br/>
          Celular: 3329 623073 
        </p>
      </div>
    </div>
  );
};
