import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";
import { PerfectInput } from "./Components/PerfectInput";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Medusa"]);

  const AnadirCategoria = (NuevaCategoria) => {
    if (!categories.includes(NuevaCategoria)) {
      //añade una nueva categoria
      setCategories([...categories, NuevaCategoria]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <PerfectInput />

      <hr />
      <AddCategory FuncionParaCategoria={AnadirCategoria} />
      {/*esto envia la funcion "AnadirCategoria" al componente hijo AddCategory que sera reconocido segun el nombre antes del "="*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} /> //por cada categoria se muestran sus Gifs
      ))}
    </>
  );
};
