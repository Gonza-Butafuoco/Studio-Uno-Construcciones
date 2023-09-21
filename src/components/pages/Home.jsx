import React from "react";
import "./animaciones.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import minimalista1 from "../Resources/minimalista1.jpg";
import premoldeada2 from "../Resources/premoldeada2.jpg";
import cabaña3 from "../Resources/cabaña 3.jpg";

export const Home = () => {
  return (
    <div className="w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden">
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-10 px-4 md:px-0">
        <div className="flex flex-col items-start flex-1">
          <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center tracking-in-expand">
            ¡Bienvenidos!
          </h1>
          <p className="font-space-grotesk text-xl md:text-5xl text-left bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text tracking-in-expand max-w-[800px] ">
            Explora la fusión perfecta entre comodidad
            <br /> y estilo en nuestras casas prefabricadas.
            <br />
            Descubre un mundo de diseño innovador y<br />
            construcción eficiente.
            <br />
            Bienvenido a tu hogar ideal.
          </p>
        </div>
        <div className="flex flex-col items-center mt-12 md:mt-24 flex-1">
          <p className="font-space-grotesk text-2xl md:text-5xl text-left bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text tracking-in-expand max-w-[800px]">
            Mira algunas de las propuestas <br />
            que tenemos para vos
          </p>
          <div className="mt-8 carousel-container max-w-[600px] mx-auto tracking-in-expand ">
            <Carousel
              autoPlay
              interval={3000}
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              <div className="h-full">
                <img src={minimalista1} alt="minimalista1" className="h-full" />
              </div>
              <div className="h-full">
              <img src={premoldeada2} alt="premoldeada2" className="h-full" />
              </div>
              <div className="h-full">
              <img src={cabaña3} alt="cabaña3" className="h-full" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

