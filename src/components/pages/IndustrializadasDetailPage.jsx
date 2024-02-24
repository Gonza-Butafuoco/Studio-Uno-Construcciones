import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import industrializadas1 from "../Resources/industrializadas1.jpeg";
import industrializadas2 from "../Resources/industrializadas2.jpeg";
import industrializadas3 from "../Resources/industrializadas3.jpeg";
import industrializadas4 from "../Resources/industrializadas4.jpeg";
import industrializadas5 from "../Resources/industrializadas5.jpeg";
import "../pages/animaciones.css"

const IndustrializadasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden tracking-in-expand'>
      <div className="flex flex-col h-96  px-4 md:px-0 ">
        <h1 className="font-space-grotesk my-52 md:my-20  text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center  tracking-in-expand">
          Industrializadas
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
            <div className="h-96">
              <img src={industrializadas1} alt="industrializadas1" className="h-96" />
            </div>
            <div className="h-96">
              <img src={industrializadas2} alt="industrializadas2" className="h-96" />
            </div>
            <div className="h-96">
              <img src={industrializadas3} alt="industrializadas3" className="h-96" />
            </div>
            <div className="h-96">
              <img src={industrializadas4} alt="industrializadas4" className="h-96" />
            </div>
            <div className="h-96">
              <img src={industrializadas5} alt="industrializadas5" className="h-96" />
            </div>
          </Carousel>
        </div>
        <div>
      </div>
      </div>
    </div>
  );
};

export default IndustrializadasDetailPage;