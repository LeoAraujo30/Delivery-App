import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getLocalStorage from '../services/getLocalStorage';

export default function Navbar() {
  // const { name: userName, role } = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState({
    userName: '',
    role: '',
  });

  const navigate = useNavigate();

  const getUser = getLocalStorage('user');

  useEffect(() => {
    // if (!getUser) {
    //   navigate('/login');
    //   console.log('voltou para login');
    // }

    if (getUser) {
      const { name, role } = getUser;
      setUser({ userName: name, role });
      console.log(`fez o login de ${role}`);
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
        PRODUCTS
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/customer/orders') }
      >
        ORDERS
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        // onClick={ () => navigate('/profile') implementar}
      >
        { user.userName }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        EXIT
      </button>
    </nav>
  );

  return customerNavbar;
}
