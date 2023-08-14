import React from "react";
import { useParams } from "react-router-dom";

const CabañasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-screen bg-[url("https://i.imgur.com/zXxczpB.jpg")] bg-cover bg-fixed overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text mb-8 text-center">
          ¡Bienvenidos!
        </h1>
        <p className="font-space-grotesk text-xl md:text-5xl text-center bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text">
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

export default CabañasDetailPage;
