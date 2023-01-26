import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableCheckout from '../components/TableCheckout';
import AppContext from '../utils/AppContext';

function AddressInput() {
  // const [isButtonDisable, setIsButtonDisable] = useState('');
  // const [invalidRegister, setInvalidRegister] = useState(false);
  // const { email, setEmail, password, setPassword,
  //   username, setUsername } = useContext(AppContext);

  const navigate = useNavigate();
  // const handleClick = async (body) => {
  //   const api = axios.create({
  //     baseURL: 'http://localhost:3001/user',
  //   });
  //   try {
  //     const { data } = await api.post('/register', body);
  //     const userObj = { name: username, email, role: 'customer', token: data };
  //     localStorage.setItem('user', JSON.stringify(userObj));
  //     setInvalidRegister(false);
  //     navigate(`/${userObj.role}/products`);
  //   } catch (_error) {
  //     setInvalidRegister(true);
  //   }
  // };

  // const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);

  useEffect(() => {
    // if (isValidEmail(email)
    //   && password.length >= MIN_LENGHT_PASS
    //   && username.length >= MIN_LENGHT_NAME) {
    //   setIsButtonDisable(false);
    // } else {
    // setIsButtonDisable(true);
    // }
  }, []);

  return (
    <div>
      <label htmlFor="name-input">
        <input
          className="name-input"
          data-testid="customer_checkout__select-seller"
          type="text"
          placeholder="Name"
          onChange={ ({ target }) => setUsername(target.value) }
        />
      </label>

      <label htmlFor="email-input">
        <input
          className="email-input"
          data-testid="customer_checkout__input-address"
          type="email"
          placeholder="Email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password-input">
        <input
          className="password-input"
          data-testid="customer_checkout__input-address-number"
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        disabled={ isButtonDisable }
        onClick={ () => handleClick({ name: username, email, password }) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default AddressInput;
