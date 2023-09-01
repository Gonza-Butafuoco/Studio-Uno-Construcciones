import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import casilla1 from "../Resources/casilla1.jpg";
import casilla2 from "../Resources/casilla 2.jpg";
import casilla3 from "../Resources/casilla3.jpg";
import plano1 from "../Resources/Plano 1.jpeg";
import plano2 from "../Resources/Plano 2.jpeg";
import plano3 from "../Resources/Plano 3.jpeg";
import plano4 from "../Resources/Plano 4.jpeg";
import plano5 from "../Resources/Plano 5.jpeg";
import plano6 from "../Resources/Plano 6.jpeg";
import plano7 from "../Resources/Plano7.jpeg";

const CasillasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-full bg-[url("https://i.imgur.com/O1kPyxm.png")] bg-cover bg-fixed overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-full px-4 md:px-0 ">
        <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text mb-8 text-center my-10">
          Casillas
        </h1>
        <div className="carousel-container max-w-[600px] mx-auto ">
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
          </Carousel>
        </div>
        <div>
          <p className="font-space-grotesk text-2xl md:text-4xl bg-gradient-to-r text-transparent from-green-400 via-blue-500 to-blue-900 bg-clip-text mx-auto my-24 text-center">
            Las distintas formas de organizar la vivienda pueden ser vistas en los siguentes planos</p>
        </div>
        <div>
        <div className="carousel-container max-w-[600px] mx-auto mb-10 ">
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
              <img src={plano1} alt="plano1" className="h-full" />
            </div>
            <div className="h-full">
              <img src={plano2} alt="plano2" className="h-full" />
            </div>
            <div className="h-full">
              <img src={plano3} alt="plano3" className="h-full" />
            </div>
            <div className="h-full">
              <img src={plano4} alt="plano4" className="h-full" />
            </div>
            <div className="h-full">
              <img src={plano5} alt="plano5" className="h-full" />
            </div>
            <div className="h-full">
              <img src={plano6} alt="plano6" className="h-full" />
            </div>
            <div className="h-full">
              <img src={plano7} alt="plano7" className="h-full" />
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CasillasDetailPage;
