import React, { useState, useEffect } from "react";
import {
  FaCopy,
  FaSyncAlt,
  FaCogs,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import AdvancedOptions from "./AdvancedOptions";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [options, setOptions] = useState({
    length: 8,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecial: false,
  });

  // Evalua fortaleza de la contraseña
  useEffect(() => {
    if (password.length < 6) return setStrength("Poco segura");
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 8 && hasLower && hasUpper && hasNumber && hasSpecial) {
      setStrength("Muy segura");
    } else {
      setStrength("Segura");
    }
  }, [password]);

  // Copiar al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopyMessage("¡Contraseña copiada!");
      setTimeout(() => setCopyMessage(""), 3000);
    });
  };

  // Generar contraseña aleatoria
  const generatePassword = () => {
    let charset = "";
    if (options.includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (options.includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.includeNumbers) charset += "0123456789";
    if (options.includeSpecial) charset += "!@#$%^&*(),.?\":{}|<>";
    if (!charset) return alert("Selecciona al menos un tipo de carácter.");

    let gen = "";
    for (let i = 0; i < options.length; i++) {
      gen += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(gen);
  };

  return (
    <div className="container">
      <h1 className="main-title">Fortaleza de Contraseña</h1>

      <div className="input-group">
        <label>Contraseña:</label>
        <div className="input-wrapper">
          <FaLock />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={() => setShowPassword((v) => !v)}>
          {showPassword ? <><FaEyeSlash /> Ocultar</> : <><FaEye /> Mostrar</>}
        </button>
      </div>
        <PasswordStrengthMeter strength={strength} password={password} />

      {copyMessage && <div className="copy-message">{copyMessage}</div>}

      <div className="button-group">
        <button onClick={copyToClipboard}><FaCopy /> Copiar</button>
        <button onClick={generatePassword}><FaSyncAlt /> Generar</button>
        <button onClick={() => setShowAdvanced((v) => !v)}><FaCogs /> Opciones</button>
      </div>

      {showAdvanced && (
        <div className="advanced-options">
         <AdvancedOptions options={options} setOptions={setOptions} />
        </div>
      )}
    </div>
    
  );
}

export default App;
