// src/App.js
import React, { useState, useEffect } from 'react';
import AdvancedOptions       from './AdvancedOptions';
import PasswordInput         from './PasswordInput';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './App.css';

function App() {
  // estados principales
  const [password, setPassword]       = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [options, setOptions]         = useState({
    length: 8,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecial: false
  });
  const [strength, setStrength]       = useState('Baja');

  // efecto que recalcula la fortaleza cuando cambia la password u opciones
  useEffect(() => {
    let score = 0;

    // largo
    score += password.length >= options.length ? 1 : 0;
    // minúsculas
    if (options.includeLowercase && /[a-z]/.test(password)) score++;
    // mayúsculas
    if (options.includeUppercase && /[A-Z]/.test(password)) score++;
    // números
    if (options.includeNumbers && /\d/.test(password)) score++;
    // especiales
    if (options.includeSpecial && /[^A-Za-z0-9]/.test(password)) score++;

    // mapeo puntuación → texto
    if (score >= 4) {
      setStrength('Alta');
    } else if (score >= 2) {
      setStrength('Media');
    } else {
      setStrength('Baja');
    }
  }, [password, options]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de Contraseñas</h1>
      </header>
      <main style={{ padding: '1rem' }}>
        <PasswordInput
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <AdvancedOptions
          options={options}
          setOptions={setOptions}
        />

        <PasswordStrengthMeter strength={strength} />
      </main>
    </div>
  );
}

export default App;
