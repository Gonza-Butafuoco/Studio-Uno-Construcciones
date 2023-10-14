import React from "react";
import "../pages/animaciones.css";
import instagram from "../Resources/Instagram.png"
import whatsapp from "../Resources/Whatsapp.png"

export const AboutUs = () => {
  return (
    <div className="w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full text-white px-2 md:px-0">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center tracking-in-expand">
          Acerca de nosotros
        </h1>
        <p className="font-space-grotesk text-xl  md:text-3xl md:mx-40 text-center bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand ">
          Planos a medidas construimos en todo el país en terrenos, fondos y
          Terrazas. <br />
          Exposición y venta
        </p>
        <h2 className="font-space-grotesk text-3xl md:text-6xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mt-10 text-center tracking-in-expand">
          ¡Contactanos!
        </h2>
        <p className="font-space-grotesk mt-1  text-xl md:text-3xl text-center bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text tracking-in-expand">
          ¡Si te interesan algunas de nuestras propuestas no dudes en
          contactarnos!
          <br /> <br />
          Dirección: Av Sarmiento 2615
          <br />
          <br />
          Telefono Fijo: 3329 435572 <br />
          <br />
          Celular: 3329 623073
        </p>
        <div className="flex flex-row md:space-x-80 space-x-48 ">
          <a href="https://instagram.com/studio_uno_construcciones?igshid=MWZjMTM2ODFkZg==" target="_blank">
            <img src={instagram} alt="instagram" className="h-20 w-20 md:h-36 md:w-36 tracking-in-expand" />
          </a>
          <a href="https://wa.link/128cyf" target="_blank">
            <img src={whatsapp} alt="whatsapp" className="h-20 w-20 md:h-36 md:w-36 tracking-in-expand" />
          </a>
        </div>
      </div>
    </div>
  );
};
