import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../utils/AppContext';

function AddressInput() {
  const [users, setUsers] = useState([]);
  const [customer, setCustomer] = useState('null');
  const [seller, setSeller] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const { totalPrice } = useContext(AppContext);

  const navigate = useNavigate();
  const handleClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/user',
    });
    try {
      const { data } = await api.post('/register', body);
      const userObj = { name: username, email, role: 'customer', token: data };
      localStorage.setItem('user', JSON.stringify(userObj));
      setInvalidRegister(false);
      navigate(`/${userObj.role}/products`);
    } catch (_error) {
      setInvalidRegister(true);
    }
  };

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    if (seller && address && number) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [seller, address, number]);

  return (
    <div>
      <label htmlFor="select-seller">
        <select
          className="select-seller"
          data-testid="customer_checkout__select-seller"
          placeholder="Seller"
          onChange={ ({ target }) => setSeller(target.value) }
        >
          { users
            .map(
              (user) => <option key={ user.id } value={ user.id }>{user.name}</option>,
            )}
        </select>
      </label>

      <label htmlFor="input-address">
        <input
          className="input-address"
          data-testid="customer_checkout__input-address"
          type="text"
          placeholder="Address"
          onChange={ ({ target }) => setAddress(target.value) }
        />
      </label>

      <label htmlFor="input-address-number">
        <input
          className="input-address-number"
          data-testid="customer_checkout__input-address-number"
          type="number"
          placeholder="Number"
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </label>

      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        disabled={ isButtonDisable }
        onClick={ () => handleClick({
          userId, sellerId: seller, totalPrice, address, number,
        }) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default AddressInput;
