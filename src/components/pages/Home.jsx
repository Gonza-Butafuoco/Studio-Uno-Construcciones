import React from "react";
import "./animaciones.css";
import logotipo from "../Resources/studiouno_logotipo.svg";
import sucursal from "../Resources/Sucursal.jpeg";

export const Home = () => {
  return (
    <div className="w-full h-full bg-slate-100 bg-cover bg-fixed overflow-hidden">
      <div className="w-full h-full bg-slate-100 bg-cover bg-fixed overflow-hidden">
        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-10 px-4 md:px-0">
          <div className="flex flex-col  flex-1 mx-auto md:mx-0 md:text-center">
            <div className="flex flex-col items-center">
              <h1 className="font-space-grotesk md:pl-10 text-5xl md:text-9xl bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text mb-2 md:mb-8 tracking-in-expand">
                ¡Bienvenidos!
              </h1>
            </div>
            <div className="flex flex-row justify-center pt-8 md:pt-1 md:pl-10">
              <img
                src={logotipo}
                alt="logotipo"
                className="items-center h-28 w-28 md:h-36 md:w-36"
              />
              <h2 className="font-space-grotesk pt-8 md:pt-8 text-3xl md:text-6xl bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text ml-4 md:ml-8 mb-8 tracking-in-expand">
                Studio Uno Construcciones
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <p className="font-space-grotesk pt-2 md:pl-10 md: text-xl md:text-[42px]/[43px] text-left bg-gradient-to-r text-transparent from-blue-700 to-sky-700 bg-clip-text tracking-in-expand max-w-[800px]">
                Empresa familiar radicada en San Pedro,Provincia de Buenos
                Aires.Con más de 10 años de experiencia,contamos con más de 980
                casas entregadas en la zona y alrededores. <br/>
                Somos fabricantes,realizamos planos a medida y entregamos su hogar
                llave en mano en 45 días. Construimos en todo el país en
                terrenos,fondos y terrazas
              </p>
              <img
                src={sucursal}
                alt="sucursal"
                className=" pt-2  h-64 w-auto md:h-[480px] md:w-[1000px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
