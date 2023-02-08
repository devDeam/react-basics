/* Renderizado de Elementos */
import React, { ReactFragment } from "react";
import data from "../../helpers/data.json";

type Frameworks = {
  id: number,
  name: string,
  web: string
};

const RenderElement = (): JSX.Element => {
    const frameworks: Frameworks[] = data.frameworks;
  return (
    <div>
      <h3>Frameworks Front-ent TypeScript</h3>
      <ol>
        {frameworks.map((el)=>(
            <li key={el.id}><a href={el.web} target="_blank">{el.name}</a></li>
        ))}
      </ol>
    </div>
  );
};

const RenderizadoElementos = (): JSX.Element => {
  const seasons: string[] = ["Primavera", "Verano", "Otoño", "Invierno"];

  return (
    <div>
      <h2>Renderizado de elementos</h2>
      <ul>
        <RenderElement />
      </ul>
    </div>
  );
};

export default RenderizadoElementos;
