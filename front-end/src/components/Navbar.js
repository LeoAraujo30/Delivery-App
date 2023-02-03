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
    if (user.role === 'customer') localStorage.removeItem('productsCart');
    navigate('/login');
  };

  const customerNavbar = (
    <nav id="navbar">
      { user.role === 'customer' ? (
        <button
          className="navbarButton"
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => navigate('/customer/products') }
        >
          Products
        </button>
      ) : ''}
      { user.role !== 'administrator' ? (
        <button
          className="navbarButton"
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigate(`/${user.role}/orders`) }
        >
          Orders
        </button>
      ) : ''}
      <h2
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user.userName }
      </h2>
      <button
        className="navbarButton"
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
