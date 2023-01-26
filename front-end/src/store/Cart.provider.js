import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import CartContext from './Cart.context';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const defaultContext = useMemo(() => ({ cart, setCart }), [cart]);
  return (
    <CartContext.Provider value={ defaultContext }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
