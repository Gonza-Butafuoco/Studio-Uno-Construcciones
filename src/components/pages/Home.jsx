import React from "react";
import "./animaciones.css";
import logotipo from "../Resources/studiouno_logotipo.svg";
import sucursal from "../Resources/Sucursal.jpeg";
import fabrica from "../Resources/fabrica.jpg";
import construccion from "../Resources/construccion.jpg";
import entrega from "../Resources/entrega.jpg";
import planos from "../Resources/planos.jpg";

export const Home = () => {
  return (
    <div className="w-full h-full bg-slate-100 bg-cover bg-fixed overflow-hidden">
      <div className="w-full h-full bg-slate-100 bg-cover bg-fixed overflow-hidden mb-4">
        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-10 px-4 md:px-0">
          <div className="flex flex-col  flex-1 mx-auto md:mx-0 md:text-center">
            <div className="flex flex-col items-center">
              <h1 className="font-space-grotesk md:pl-10 text-5xl md:text-7xl bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text mb-2 md:mb-8 tracking-in-expand">
                ¡Bienvenidos!
              </h1>
            </div>
            <div className="flex flex-row justify-center pt-8 md:pt-0 md:pl-10">
              <img
                src={logotipo}
                alt="logotipo"
                className="items-center h-28 w-28 md:h-32 md:w-36"
              />
              <h2 className="font-space-grotesk pt-8 md:pt-7 text-3xl md:text-4xl bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text ml-4 md:ml-8 mb-8 tracking-in-expand">
                Studio Uno Construcciones
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center ">
              <p className=" font-space-grotesk 2xl:ml-40 pt-2 md:pl-5  md:pr-2 md:pt-8 text-2xl md:text-3xl text-left bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand md:w-2/5">
                Empresa Lider en casas americanas premoldeadas, cabañas y
                complejos turísticos.
                <br /> Radicada en San Pedro, Provincia de Buenos Aires. Hace más de
                10 años contamos con más de 980 casas entregadas en la zona
              </p>
              <img
                src={sucursal}
                alt="sucursal"
                className="md:items-center md:justify-center md:ml-52 pt-8 h-64 w-screen md:h-72 md:w-96"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-center md:gap-x-20 pt-40 md:pt-10 md:justify-center">
              <div className="flex flex-col justify-center  items-center">
                <img
                  src={fabrica}
                  alt="fabricación"
                  className="md:pl-6 pt-8 h-64 w-screen md:h-64 md:w-96"
                />
                <p className="my-10 font-space-grotesk pt-2 md:pt-9 text-2xl md:text-3xl  bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand">
                  Somos fabricantes
                </p>
              </div>
              <div className="flex flex-col justify-center  items-center">
                <img
                  src={planos}
                  alt="planos"
                  className="pt-8 h-64 w-screen md:h-64 md:w-96"
                />
                <p className="my-10 font-space-grotesk pt-2 md:pt-0 text-2xl md:text-3xl  bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand">
                  Contamos con planos a medida
                </p>
              </div>
              <div className="flex flex-col justify-center  items-center" >
                <img
                  src={construccion}
                  alt="construcciones"
                  className="h-64 w-screen md:h-64 md:w-96 pt-8"
                />
                <p className="my-10 font-space-grotesk pt-2 md:pt-0 text-2xl md:text-3xl  bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand">
                  Construimos en todo el pais
                </p>
              </div>
              <div className="flex flex-col justify-center  items-center">
                <img
                  src={entrega}
                  alt="entrega"
                  className="h-64 w-screen md:h-64 md:w-96 pt-8"
                />
                <p className="my-10 font-space-grotesk pt-2 md:pt-0 text-2xl md:text-3xl  bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand">
                  Entrega por escrito en 45 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
