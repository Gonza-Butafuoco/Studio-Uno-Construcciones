import React from "react";
import "../pages/animaciones.css";
import instagram from "../Resources/Instagram.png";
import whatsapp from "../Resources/Whatsapp.png";

export const AboutUs = () => {
  return (
    <div className="w-full  bg-slate-100  min-h-screen h-full overflow-hidden">
      <div className="w-full h-full bg-slate-100 bg-cover overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full  px-2 md:px-0 md:overflow-y-hidden">
          <h1 className="font-space-grotesk text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mb-8 text-center tracking-in-expand">
            Acerca de nosotros
          </h1>
          <p className="font-space-grotesk text-xl  md:text-3xl md:mx-40 text-center bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand ">
            Planos a medida. Construimos en todo el país en terrenos,fondos y
            terrazas.
            <br />
            Exposición y venta.
          </p>
          <h2 className="font-space-grotesk text-3xl md:text-6xl bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text mt-10 text-center tracking-in-expand">
            ¡Contactanos!
          </h2>
          <p className="font-space-grotesk mt-1  text-xl md:text-3xl text-center bg-gradient-to-r text-transparent from-blue-700  to-sky-700 bg-clip-text tracking-in-expand">
            ¡Si te interesan alguna de nuestras propuestas, no dudes en
            contratarnos!
            <br /> <br />
            Dirección de nuestra sucursal: Avenida Sarmiento 2615,San
            Pedro,Provincia de Buenos Aires.
            <br />
            <br />
            Solicite vendedor a domicilio sin cargo al 3329623073 <br />
            <br />
            Telefono Fijo: 3329 435572
          </p>
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-8">
            <div className="md:w-1/2">
              <p className="font-space-grotesk mt-1 text-xl md:text-3xl text-center bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand">
                Seguinos en nuestras redes sociales <br />o escribinos para
                poder brindarte la mejor asistencia :
              </p>
            </div>
            <div className="flex flex-row mt-4 md:mt-0">
              <div className="hover:-translate-y-1 hover:scale-110 hover:bg-teal-200 hover:rounded-lg ease-in-out delay-150 duration-300 ml-10 md:ml-3">
                <a
                  href="https://instagram.com/studio_uno_construcciones?igshid=MWZjMTM2ODFkZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    className="h-14 w-14 md:h-36 md:w-36 tracking-in-expand"
                  />
                </a>
              </div>
              <div className="hover:-translate-y-1 hover:scale-110 hover:bg-teal-200 hover:rounded-lg ease-in-out delay-150 duration-300 ml-52 md:ml-52">
                <a
                  href="https://wa.link/128cyf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="h-14 w-14 md:h-36 md:w-36 tracking-in-expand"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
