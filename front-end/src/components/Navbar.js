import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getLocalStorage from '../services/getLocalStorage';

export default function Navbar() {
  const [user, setUser] = useState({
    userName: '',
    role: '',
  });

  const navigate = useNavigate();

  const getUser = getLocalStorage('user');

  useEffect(() => {
    if (!getUser) {
      navigate('/login');
    }

    if (getUser) {
      const { name, role } = getUser;
      setUser({ userName: name, role });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const customerNavbar = (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        Products
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/customer/orders/:id') }
      >
        Orders
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        // onClick={ () => navigate('/profile')}
      >
        { user.userName }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Exit
      </button>
    </nav>
  );

  return customerNavbar;
}
