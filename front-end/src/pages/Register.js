import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../utils/AppContext';

const MIN_LENGHT_PASS = 6;
const MIN_LENGHT_NAME = 12;

function Register() {
  const [isButtonDisable, setIsButtonDisable] = useState('');
  const { email, setEmail, password, setPassword,
    username, setUsername } = useContext(AppContext);

  // const navigate = useNavigate();
  // const handleClick = () => navigate('/products');

  const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);

  useEffect(() => {
    if (isValidEmail(email)
      && password.length >= MIN_LENGHT_PASS
      && username.length >= MIN_LENGHT_NAME) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [email, password, username]);

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label htmlFor="name-input">
          <input
            className="name-input"
            data-testid="common_register__input-name"
            type="text"
            placeholder="Name"
            onChange={ ({ target }) => setUsername(target.value) }
          />
        </label>

        <label htmlFor="email-input">
          <input
            className="email-input"
            data-testid="common_register__input-email"
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          <input
            className="password-input"
            data-testid="common_register__input-password"
            type="password"
            placeholder="Password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ isButtonDisable }
        //   onClick={ handleClick }
        >
          Cadastrar
        </button>

        <span
          data-testid="common_register__element-invalid_register"
        >
          dados invalidos
        </span>
      </div>
    </div>
  );
}

export default Register;
