import React from "react";

export const AboutUs = () => {
  return (
    <div className='bg-[url("https://i.imgur.com/O1kPyxm.png")] bg-cover bg-fixed'>
      <div className="flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-600 via-cyan-600-600 to-sky-600 bg-clip-text mb-8 text-center">
          Sobre nosotros
        </h1>
        <p className="font-space-grotesk text-xl  md:text-3xl md:mx-40 text-center bg-gradient-to-r text-transparent from-blue-600 via-cyan-600-600 to-sky-600 bg-clip-text ">
          Studio Uno Construcciones es una destacada empresa en el sector de la
          construcción de casas prefabricadas. Con años de experiencia en el
          mercado, nos enorgullece ofrecer soluciones habitacionales de alta
          calidad y diseño innovador. Nuestra misión es brindar hogares
          funcionales y estéticamente atractivos a un precio accesible.
        </p>
        <h1 className="font-space-grotesk text-5xl md:text-7xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text mt-8 text-center">
          ¡Contactanos!
        </h1>
        <p className="font-space-grotesk mt-1 mb-5 text-xl md:text-3xl text-center bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text">
          ¡Si te interesan algunas de nuestras propuestas no dudes en llamarnos!<br/> <br/>
          Dirección: Av Sarmiento 2615<br/><br/>
          Telefono Fijo: 3329 435572 <br/><br/>
          Celular: 3329 623073 
        </p>
      </div>
    </div>
  );
};
