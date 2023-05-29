import React from 'react'
import imagenCabaña from '../Resources/imagen-cabaña.jpg'
import imagenMinimalista from '../Resources/imagen-Minimalista.jpg'
import imagenPremoldeada from '../Resources/imagen-Premoldeada.jpg'
import imagenCasilla from '../Resources/imagen-casilla.jpg'
import {Model} from '../molecules/Model'



export const Modelscontainer = () => {
  const modelos = [
    {
      titulo: "Cabañas",
      imagen: imagenCabaña,
      descripcion: 'Techó de Zing cielorraso de machimbre exterior de medio tronco cabañero madera dura interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas platea de madera barandas y escalera',
      medidas: ["Altura:", "Ancho:", "Ambientes:"],
    },
    {
      titulo: "Minimalistas ",
      imagen: imagenMinimalista ,
      descripcion: "Techo de Zing cielorraso de machimbre exterior de placas de cemento interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas",
      medidas: ["Altura:", "Ancho:", "Ambientes:"],
    },
    {
      titulo: "Premoldeadas",
      imagen: imagenPremoldeada,
      descripcion: "Techo de Zing cielorraso de machimbre exterior de placas de cemento interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas",
      medidas: ["Altura:", "Ancho:", "Ambientes:"],
    },
    {
      titulo: "Casillas",
      imagen: imagenCasilla,
      descripcion: "Techó de Zing cielorraso de machimbre exterior de medio tronco cabañero madera dura interior de durlok puertas placas interiores ventanas de aluminio blanco con vidrios y rejas caños y cajas de luz agua fría y caliente en baño y cocina puerta de entrada inyectadas platea de madera barandas y escalera",
      medidas: ["Altura:", "Ancho:", "Ambientes:"],
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 justify-center">
      {modelos.map((modelo, index) => (
        <Model
          key={index} className=" overflow-auto"
          titulo={modelo.titulo}
          imagen={modelo.imagen}
          descripcion={modelo.descripcion}
          medidas={modelo.medidas}
        />
      ))}
    </div>
  );
};



export default Modelscontainer