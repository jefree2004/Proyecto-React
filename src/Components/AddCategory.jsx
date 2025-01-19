import { useState } from "react";

export const AddCategory = ({ FuncionParaCategoria }) => {
  const [inputValue, setInputValue] = useState("Anime");

  const onInputChanged = (e) => {
    setInputValue(e.target.value); //permite escribir en el input
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    if (inputValue.trim().length > 0) {
      // " hola ".trim() se convierte en "hola".

      FuncionParaCategoria(inputValue.trim()); // si lo de arriba pasa se añade la nueva categoria que es un inputValue
      setInputValue(""); // Limpia el input después de enviar
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {
        //lo que pasa con Enter
      }
      <input
        type="text"
        placeholder="Buscar gifs"
        className="input"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  );
};
