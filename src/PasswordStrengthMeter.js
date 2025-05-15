// src/PasswordStrengthMeter.js
import React from 'react';

function PasswordStrengthMeter({ strength, password }) {
  // --- cálculo de score y barColor ---
  const lengthScore = Math.min(password.length / 12, 1);
  const varietyScore = [/[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%^&*(),.?":{}|<>]/]
    .reduce((count, re) => (re.test(password) ? count + 1 : count), 0) / 4;
  const score = Math.round(((lengthScore + varietyScore) / 2) * 100);

  let barColor = '#ef4444';           // rojo por defecto
  if (score > 75) barColor = '#16a34a';   // verde
  else if (score > 40) barColor = '#f59e0b'; // naranja
return (
    <div className="meter-wrapper">
      <div className="meter-container">
        <div
          className="meter-bar"
          style={{ width: `${score}%`, color: barColor }}
        />
      </div>
      <div className="meter-label" style={{ color: barColor }}>
        {strength} ({score}%)
      </div>
    </div>
  );
}

export default PasswordStrengthMeter;
