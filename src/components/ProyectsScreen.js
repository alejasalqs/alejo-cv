import React from "react";
import { proyects } from "../data/proyects";
import { ProyectCard } from "./ProyectCard";

export const ProyectsScreen = () => {
  const proyectsData = proyects;

  return (
    <>
      <h1>Projects 💻</h1>
      <p>
        You can find more of my job in my github account if you
        <a href="https://github.com/alejasalqs?tab=repositories" target="blank">
          click here
        </a>
      </p>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
        {proyectsData.map((proyect) => (
          <ProyectCard key={proyect.name} {...proyect} />
        ))}
      </div>
    </>
  );
};
