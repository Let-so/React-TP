// src/AdvancedOptions.js
import React from "react";

export default function AdvancedOptions({ options, setOptions }) {
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setOptions({
      ...options,
      [name]: type === "checkbox" ? checked : parseInt(value),
    });
  };

  return (
    <div>
      <h4>Opciones Avanzadas</h4>
      <div className="content">
        {/* Fila de longitud abarcando 2 columnas */}
        <div className="option-row length-row">
          <label htmlFor="length">Longitud:</label>
          <input
            type="number"
            id="length"
            name="length"
            min="4"
            value={options.length}
            onChange={handleChange}
          />
        </div>

        {/* Las siguientes filas entran en dos columnas */}
        <label className="option-row">
          <input
            type="checkbox"
            name="includeLowercase"
            checked={options.includeLowercase}
            onChange={handleChange}
          />
          Incluir letras minúsculas
        </label>

        <label className="option-row">
          <input
            type="checkbox"
            name="includeUppercase"
            checked={options.includeUppercase}
            onChange={handleChange}
          />
          Incluir letras mayúsculas
        </label>

        <label className="option-row">
          <input
            type="checkbox"
            name="includeNumbers"
            checked={options.includeNumbers}
            onChange={handleChange}
          />
          Incluir números
        </label>

        <label className="option-row">
          <input
            type="checkbox"
            name="includeSpecial"
            checked={options.includeSpecial}
            onChange={handleChange}
          />
          Incluir caracteres especiales
        </label>
      </div>
    </div>
  );
}
