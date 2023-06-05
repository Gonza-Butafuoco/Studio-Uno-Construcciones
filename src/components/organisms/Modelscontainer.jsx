import React from "react";
import imagenCabaña from "../Resources/imagen-cabaña.jpg";
import imagenMinimalista from "../Resources/imagen-Minimalista.jpg";
import imagenPremoldeada from "../Resources/imagen-Premoldeada.jpg";
import imagenCasilla from "../Resources/imagen-casilla.jpg";
import { Model } from "../molecules/Model";
import { Link } from "react-router-dom";

export const Modelscontainer = () => {
  const modelos = [
    {
      titulo: "Cabañas",
      imagen: imagenCabaña,
      descripcion:
        "Techó de Zing cielorraso de machimbre exterior de medio tronco cabañero madera dura interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas platea de madera barandas y escalera",
    },
    {
      titulo: "Minimalistas ",
      imagen: imagenMinimalista,
      descripcion:
        "Techo de Zing cielorraso de machimbre exterior de placas de cemento interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas",
    },
    {
      titulo: "Premoldeadas",
      imagen: imagenPremoldeada,
      descripcion:
        "Techo de Zing cielorraso de machimbre exterior de placas de cemento interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas",
    },
    {
      titulo: "Casillas",
      imagen: imagenCasilla,
      descripcion:
        "Techó de Zing cielorraso de machimbre exterior de medio tronco cabañero madera dura interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas platea de madera barandas y escalera",
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 justify-center ">
      {modelos.map((modelo, index) => (
        <Link key={index} to={`/model/${modelo.titulo}`}>
          <Model
            titulo={modelo.titulo}
            imagen={modelo.imagen}
            descripcion={modelo.descripcion}
          />
        </Link>
      ))}
    </div>
  );
};

export default Modelscontainer;
