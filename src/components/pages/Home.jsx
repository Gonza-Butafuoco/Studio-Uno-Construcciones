import React from "react";

export const Home = () => {
  return (
    <div>
      <body className='absolute top-0 w-full h-screen bg-no-repeat bg-cover bg-left bg-fixed bg-[url("https://i.imgur.com/zXxczpB.jpg")]'>
        <div>
          <h1 className=" font-space-grotesk absolute z-1 left-28 top-60 text-9xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text">
            ¡Bienvenidos!
          </h1>
          <p className=" font-space-grotesk absolute left-28 top-[450px] text-5xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text ">
            Explora la fusión perfecta entre comodidad<br/> y estilo en nuestras
            casas premoldeadas.<br/> 
            Descubre un mundo de diseño innovador y<br/>
            construcción eficiente.<br/>
            Bienvenido a tu hogar ideal.
          </p>
        </div>
      </body>
    </div>
  );
};
