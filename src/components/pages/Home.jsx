import React from "react";

export const Home = () => {
  return (
    <div className='w-full h-screen bg-sky-200 bg-cover bg-fixed overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-600 via-cyan-600-600 to-sky-600 bg-clip-text mb-8 text-center">
          ¡Bienvenidos!
        </h1>
        <p className="font-space-grotesk text-xl md:text-5xl text-center bg-gradient-to-r text-transparent from-blue-600 via-cyan-600-600 to-sky-600 bg-clip-text">
          Explora la fusión perfecta entre comodidad<br/> y estilo en nuestras
          casas premoldeadas.<br/> 
          Descubre un mundo de diseño innovador y<br/>
          construcción eficiente.<br/>
          Bienvenido a tu hogar ideal.
        </p>
      </div>
    </div>
  );
};
