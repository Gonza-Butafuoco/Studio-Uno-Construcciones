import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import minimalista1 from "../Resources/minimalista 1.jpg";
import minimalista2 from "../Resources/minimalista 2.jpeg";
import minimalista3 from "../Resources/minimalista 3.jpg";
import minimalista4 from "../Resources/minimalista 4.jpeg";
import minimalista5 from "../Resources/minimalista 5.jpeg";
import minimalista6 from "../Resources/minimalista 6.jpeg";
import minimalista7 from "../Resources/minimalista 7.jpeg";
import "../pages/animaciones.css"

const MinimalistasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden tracking-in-expand'>
      <div className="flex flex-col  h-full px-4 md:px-0 ">
        <h1 className="font-space-grotesk my-52 md:my-20  text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center  tracking-in-expand">
          Minimalistas
        </h1>
        <div className="carousel-container max-w-[600px] mx-auto tracking-in-expand">
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
              <img src={minimalista2} alt="minimalista2" className="h-full" />
            </div>
            <div className="h-full">
              <img src={minimalista3} alt="minimalista3" className="h-full" />
            </div>
            <div className="h-full">
              <img src={minimalista4} alt="minimalista4" className="h-full" />
            </div>
            <div className="h-full">
              <img src={minimalista5} alt="minimalista5" className="h-full" />
            </div>
            <div className="h-full">
              <img src={minimalista6} alt="minimalista6" className="h-full" />
            </div>
            <div className="h-full">
              <img src={minimalista7} alt="minimalista7" className="h-full" />
            </div>
          </Carousel>
        </div>
        <div>
      </div>
      </div>
    </div>
  );
};

export default MinimalistasDetailPage;
