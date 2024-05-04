import React, { useState } from 'react';
import { validateEmail } from './emailValidation';
import { validatePassword } from './passwordValidation';
import { validatePasswordSignUp } from './passwordValidationSignUp';

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
    // Pour le formulaire d'inscription :
    // setPasswordError(validatePasswordSignUp(password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
      </div>
      <button type="submit">Valider</button>
    </form>
  );
};

export default FormValidation;
