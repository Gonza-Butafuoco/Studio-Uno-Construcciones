import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import casilla1 from "../Resources/casilla1.jpg";
import casilla2 from "../Resources/casilla 2.jpg";
import casilla3 from "../Resources/casilla3.jpg";
import casilla4 from "../Resources/casilla 4.jpeg";
import casilla5 from "../Resources/casilla5.jpeg";
import casilla6 from "../Resources/casilla6.jpeg";
import "../pages/animaciones.css"


const CasillasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden tracking-in-expand'>
      <div className="flex flex-col  h-full px-4 md:px-0 ">
        <h1 className="font-space-grotesk my-52 md:my-20  text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center  tracking-in-expand">
          Casillas
        </h1>
        <div className="carousel-container max-w-[600px] mx-auto tracking-in-expand ">
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
              <img src={casilla1} alt="casilla1" className="h-full" />
            </div>
            <div className="h-full">
              <img src={casilla2} alt="casilla2" className="h-full" />
            </div>
            <div className="h-full">
              <img src={casilla3} alt="casilla3" className="h-full" />
            </div>
            <div className="h-full">
              <img src={casilla4} alt="casilla4" className="h-full" />
            </div>
            <div className="h-full">
              <img src={casilla5} alt="casilla5" className="h-full" />
            </div>
            <div className="h-full">
              <img src={casilla6} alt="casilla6" className="h-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CasillasDetailPage;
