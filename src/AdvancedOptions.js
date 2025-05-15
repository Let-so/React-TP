// src/AdvancedOptions.js
import React from 'react';

export default function AdvancedOptions({
  options = { length: 0, includeLowercase: false, includeUppercase: false, includeNumbers: false, includeSpecial: false },
  setOptions,
}) {
  const { length, includeLowercase, includeUppercase, includeNumbers, includeSpecial } = options;

  return (
    <div className="content">
      <div className="length-row">
        <label htmlFor="length">Longitud:</label>
        <input
          id="length"
          type="number"
          min="1"
          value={length}
          onChange={e => setOptions(o => ({ ...o, length: Number(e.target.value) }))}
        />
      </div>

      <label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={e => setOptions(o => ({ ...o, includeLowercase: e.target.checked }))}
        />
        Incluir letras minúsculas
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={e => setOptions(o => ({ ...o, includeUppercase: e.target.checked }))}
        />
        Incluir letras mayúsculas
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={e => setOptions(o => ({ ...o, includeNumbers: e.target.checked }))}
        />
        Incluir números
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeSpecial}
          onChange={e => setOptions(o => ({ ...o, includeSpecial: e.target.checked }))}
        />
        Incluir caracteres especiales
      </label>
    </div>
  );
}
