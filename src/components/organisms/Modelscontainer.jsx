import React from "react";
import imagenCabaña from "../Resources/cabaña 1.jpg";
import imagenMinimalista from "../Resources/minimalista 1.jpg";
import imagenPremoldeada from "../Resources/premoldeada 1.jpeg";
import imagenIndustrializadas from "../Resources/industrializadas4.jpeg";
import imagenInteriores from "../Resources/interiores5.jpeg";
import { Model } from "../molecules/Model";
import { Link } from "react-router-dom";

export const Modelscontainer = () => {
  const modelos = [
    {
      titulo: "Cabañas",
      imagen: imagenCabaña,
      descripcion:
        "Techó de Zing,cielorraso de machimbre.El exterior está hecho de medio tronco cabañero,madera dura. El interior es de durlock. Posee:puertas placas interiores;ventanas de aluminio blanco con vidrios y rejas;caños y cajas de luz;agua fría y caliente en baño y cocina; la puerta de entrada inyectadas;platea de madera;barandas y escalera",
    },
    {
      titulo: "Minimalistas ",
      imagen: imagenMinimalista,
      descripcion:
        "Posee de Zing,cielorraso de machimbre. El exterior está compuesto de placas de cemento. El interior posee placas de durlock. Contiene puertas placas interiores;ventanas de aluminio blanco con vidrios y rejas;caños y cajas de luz;agua fría/caliente en baño y cocina; con puerta de entrada inyectadas",
    },
    {
      titulo: "Premoldeadas",
      imagen: imagenPremoldeada,
      descripcion:
        "Posee de Zing,cielorraso de machimbre. El exterior está compuesto de placas de cemento. El interior posee placas de durlock. Contiene puertas placas interiores;ventanas de aluminio blanco con vidrios y rejas;caños y cajas de luz;agua fría/caliente en baño y cocina; con puerta de entrada inyectadas",
    },
    {
      titulo: "Industrializadas",
      imagen: imagenIndustrializadas,
      descripcion:
        "Posee de Zing,cielorraso de machimbre. El exterior está compuesto de placas de cemento con un revestimiento de ladrillo.El interior posee placas de durlock. Contiene puertas placas interiores;ventanas de aluminio blanco con vidrios y rejas;caños y cajas de luz;agua fría/caliente en baño y cocina; con puerta de entrada inyectadas",
    },
    {
      titulo: "Interiores",
      imagen: imagenInteriores,
    },
  ];

  return (
    <div className="h-200 overflow-auto">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-4 justify-center p-4">
        {modelos.map((modelo, index) => (
          <div
            key={index}
            className={
              "flex rounded-lg overflow-hidden shadow-lg bg-indigo-100"
            }
          >
            <Link
              to={`/model/${modelo.titulo}`}
              className="flex md:items-center"
            >
              {modelo.titulo === "Interiores" ? (
                <>
                  <img
                    alt="Image"
                    className=" w-1/3 object-cover h-72 md:w-auto"
                    src={modelo.imagen}
                  />
                  <div className="w-2/3 p-4  flex justify-center items-center md:pl-96 ">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-2 md:mb-10">
                      {modelo.titulo}
                    </h2>
                  </div>
                </>
              ) : (
                <>
                  <img
                    alt="Image"
                    className="w-1/3 object-cover h-auto"
                    src={modelo.imagen}
                  />
                  <div className="w-2/3 p-4">
                    <h2 className="text-xl md:text-4xl text-center font-bold mb-2 md:mb-10">
                      {modelo.titulo}
                    </h2>
                    <p className="text-sm md:text-2xl md:text-center md:text-gray-600">
                      {modelo.descripcion}
                    </p>
                  </div>
                </>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modelscontainer;
