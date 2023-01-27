import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContex from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState([]);

  const provider = useMemo(() => ({ email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    products,
    setProducts,
  }), [email, password, username, products]);

  return (
    <AppContex.Provider value={ provider }>
      {children}
    </AppContex.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
