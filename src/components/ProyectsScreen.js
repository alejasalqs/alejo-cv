import React from "react";
import { proyects } from "../data/proyects";
import { ProyectCard } from "./ProyectCard";

export const ProyectsScreen = () => {
  const proyectsData = proyects;

  return (
    <>
      <h1>Proyects</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {proyectsData.map((proyect) => (
          <ProyectCard key={proyect.name} {...proyect} />
        ))}
      </div>
    </>
  );
};
