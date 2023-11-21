import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import premoldeada1 from "../Resources/premoldeada 1.jpg";
import premoldeada2 from "../Resources/premoldeada 2.jpeg";
import premoldeada3 from "../Resources/premoldeada 3.jpg";
import premoldeada4 from "../Resources/premoldeada 4.jpeg";
import premoldeada5 from "../Resources/premoldeada 5.jpeg";
import premoldeada6 from "../Resources/premoldeada 6.jpeg";
import "../pages/animaciones.css";

const PremoldeadasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div className="w-full h-screen bg-slate-100 bg-cover bg-fixed tracking-in-expand">
      <div className="flex flex-col  h-full px-4 md:px-0 ">
        <h1 className="font-space-grotesk my-52 md:my-20  text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700   to-sky-700 bg-clip-text mb-8 text-center  tracking-in-expand">
          Premoldeadas
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
              <img src={premoldeada1} alt="premoldeada1" className="h-full" />
            </div>
            <div className="h-full">
              <img src={premoldeada2} alt="premoldeada2" className="h-full" />
            </div>
            <div className="h-full">
              <img src={premoldeada3} alt="premoldeada3" className="h-full" />
            </div>
            <div className="h-full">
              <img src={premoldeada4} alt="premoldeada4" className="h-full" />
            </div>
            <div className="h-full">
              <img src={premoldeada5} alt="premoldeada5" className="h-full" />
            </div>
            <div className="h-full">
              <img src={premoldeada6} alt="premoldeada6" className="h-full" />
            </div>
          </Carousel>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default PremoldeadasDetailPage;
