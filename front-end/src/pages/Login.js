import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Axios from 'axios';
import rockGlass from '../images/rockGlass.svg';
import AppContext from '../utils/AppContext';

const MIN_LENGHT_PASS = 6;

function Login() {
  const [isButtonDisable, setIsButtonDisable] = useState('');
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const alert = useAlert();
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLoginClick = (values) => {
    Axios.post('http://localhost:3001/user/login', {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (typeof response === 'string') {
        return 'não';
      } return 'sim';
    });
  };
  const goToRegister = () => navigate('/register');
  const goToLogin = () => navigate('/products');

  const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);

  useEffect(() => {
    if (isValidEmail(email) && password.length >= MIN_LENGHT_PASS) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [email, password]);

  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <h2>Login</h2>
      <div>
        <label htmlFor="email-input">
          <input
            className="email-input"
            data-testid="common_login__input-email"
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          <input
            className="password-input"
            data-testid="common_login__input-password"
            type="password"
            placeholder="Password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ isButtonDisable }
          onClick={ handleLoginClick === 'sim' ? goToLogin
            : (
              () => {
                <div data-testid="common_login__element-invalid-email">
                  {alert.show('Oh look, an alert!') }
                  ;
                </div>;
              }) }
        >
          Login
        </button>

        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ goToRegister }
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
