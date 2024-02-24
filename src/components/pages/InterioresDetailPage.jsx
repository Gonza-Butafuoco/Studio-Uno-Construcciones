import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import interiores1 from "../Resources/interiores1.jpeg";
import interiores2 from "../Resources/interiores2.jpeg";
import interiores3 from "../Resources/interiores3.jpeg";
import interiores4 from "../Resources/interiores4.jpeg";
import interiores5 from "../Resources/interiores5.jpeg";
import "../pages/animaciones.css"

const InterioresDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden tracking-in-expand'>
      <div className="flex flex-col h-96  px-4 md:px-0 ">
        <h1 className="font-space-grotesk my-52 md:my-20  text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center  tracking-in-expand">
            Interiores
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
              <img src={interiores1} alt="interiores1" className="h-96" />
            </div>
            <div className="h-96">
              <img src={interiores2} alt="interiores2" className="h-96" />
            </div>
            <div className="h-96">
              <img src={interiores3} alt="interiores3" className="h-96" />
            </div>
            <div className="h-96">
              <img src={interiores4} alt="interiores4" className="h-96" />
            </div>
            <div className="h-96">
              <img src={interiores5} alt="interiores5" className="h-96" />
            </div>
          </Carousel>
        </div>
        <div>
      </div>
      </div>
    </div>
  );
};

export default InterioresDetailPage;