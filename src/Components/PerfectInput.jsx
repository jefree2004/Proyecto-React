import React, { useState } from "react";

export const PerfectInput = ({
  type = "text",
  placeholder = "Enter text...",
  label = "Escribe Algo", // Propiedades por defecto, que pueden ser modificadas desde el padre
  required = true,
  maxLength = 100,
  onSubmit,
}) => {
  const [value, setValue] = useState(""); // Estado para el valor del input
  const [error, setError] = useState(""); // Estado para manejar errores

  const handleChange = (e) => {
    setValue(e.target.value); // Actualiza el valor actual del input
    setError(""); // Limpia el mensaje de error al cambiar el valor
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario (recargar la página)

    if (required && !value.trim()) {
      //si obligatorio y vacio
      setError("This field is required.");
      return;
    }

    if (onSubmit) {
      onSubmit(value); // Ejecuta la funcion que esta en el padre
    }

    alert("Form submitted with value: " + value); // Notifica el envío exitoso
    setValue(""); // Limpia el input después del envío
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="input-field"
      />

      {error && <span className="input-error">{error}</span>}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};
