import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../utils/AppContext';

function CheckoutInput() {
  const [users, setUsers] = useState([]);
  const [customer, setCustomer] = useState('');
  const [seller, setSeller] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const { products } = useContext(AppContext);

  const navigate = useNavigate();
  const handleClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/sale',
    });
    try {
      const { data } = await api.post('/register', body);
      navigate(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/user',
    });
    const { data } = await api.get('/seller');
    setUsers(data);
    setCustomer(JSON.parse(localStorage.getItem('user')).id);
    setSeller(data[0].id);
  };

  useEffect(getData, []);

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
          value={ seller }
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
          userId: customer,
          sellerId: seller,
          cart: products.map(({ id, quantity }) => ({ productId: id, quantity })),
          deliveryAddress: address,
          deliveryNumber: `${number}`,
        }) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default CheckoutInput;
