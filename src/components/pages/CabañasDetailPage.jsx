import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cabaña1 from "../Resources/cabaña 1.jpg";
import cabaña2 from "../Resources/cabaña 2.jpg";
import cabaña3 from "../Resources/cabaña 3.jpg";
import cabaña4 from "../Resources/cabaña 4.jpeg";
import cabaña5 from "../Resources/cabaña 5.jpg";
import "../pages/animaciones.css"

const CabañasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className='w-full h-screen bg-slate-100 bg-cover bg-fixed overflow-hidden tracking-in-expand'>
      <div className="flex flex-col  h-full px-4 md:px-0 ">
        <h1 className="font-space-grotesk my-52 md:my-20  text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center ">
          Cabañas
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
              <img src={cabaña1} alt="cabaña1" className="h-full" />
            </div>
            <div className="h-full">
              <img src={cabaña2} alt="cabaña2" className="h-full" />
            </div>
            <div className="h-full">
              <img src={cabaña3} alt="cabaña3" className="h-full" />
            </div>
            <div className="h-full">
              <img src={cabaña4} alt="cabaña4" className="h-full" />
            </div>
            <div className="h-full">
              <img src={cabaña5} alt="cabaña5" className="h-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CabañasDetailPage;
