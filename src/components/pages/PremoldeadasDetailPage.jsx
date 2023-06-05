import React from "react";
import { useParams } from "react-router-dom";

const PremoldeadasDetailPage = () => {
  const { modelName } = useParams();

  return (
    <div>
      <body className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-300 h-screen">
        <h1 className="  text-black text-3xl mb-6">
          {modelName}
          Premoldeadas
        </h1>
        <p>
          Techo de Zing cielorraso de machimbre exterior de placas de cemento
          interior de durlok puertas placas interiores ventanas de aluminio
          blanco con vidrios y rejas caños y cajas de luz agua fría y caliente
          en baño y cocina puerta de entrada inyectadas
        </p>
      </body>
    </div>
  );
};

export default PremoldeadasDetailPage;
