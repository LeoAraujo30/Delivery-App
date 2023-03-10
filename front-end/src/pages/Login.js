import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import rockGlass from '../images/rockGlass.svg';
import AppContext from '../utils/AppContext';

const MIN_LENGHT_PASS = 6;

function Login() {
  const [isButtonDisable, setIsButtonDisable] = useState('');
  const [invalidLogin, setinvalidLogin] = useState(false);
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLoginClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/user',
    });
    try {
      const { data } = await api.post('/login', body);
      localStorage.setItem('user', JSON.stringify(data));
      setinvalidLogin(false);
      setEmail('');
      setPassword('');
      if (data.role === 'customer') {
        navigate('/customer/products');
      } else if (data.role === 'seller') {
        navigate('/seller/orders');
      } else {
        navigate('/admin/manage');
      }
    } catch (_error) {
      setinvalidLogin(true);
    }
  };

  const goToRegister = () => navigate('/register');

  const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      if (data.role === 'customer') {
        navigate('/customer/products');
      } else if (data.role === 'seller') {
        navigate('/seller/orders');
      } else {
        navigate('/admin/manage');
      }
    }
  }, []);

  useEffect(() => {
    if (isValidEmail(email) && password.length >= MIN_LENGHT_PASS) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [email, password]);

  return (
    <div className="App">
      <span className="logo">IDrinks</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <div id="login">

        <label htmlFor="email-input">
          <input
            className="loginInputs"
            data-testid="common_login__input-email"
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          <input
            className="loginInputs"
            data-testid="common_login__input-password"
            type="password"
            placeholder="Password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <div>
          <button
            id="loginbutton"
            className="loginbuttons"
            data-testid="common_login__button-login"
            type="button"
            disabled={ isButtonDisable }
            onClick={ () => handleLoginClick({ email, password }) }
          >
            Login
          </button>

          <button
            className="loginbuttons"
            data-testid="common_login__button-register"
            type="button"
            onClick={ goToRegister }
          >
            Register
          </button>
        </div>

        { invalidLogin
          ? (
            <div id="loginMsg" data-testid="common_login__element-invalid-email">
              Email e/ou senha incorretos
            </div>
          )
          : '' }
      </div>
    </div>
  );
}

export default Login;
