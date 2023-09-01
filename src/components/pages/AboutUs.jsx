import React from "react";

export const AboutUs = () => {
  return (
    <div className='w-full h-screen bg-sky-200 bg-cover bg-fixed overflow-hidden'>
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
      </div>
    </div>
  );
};
