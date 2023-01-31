import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function OrderCard({ id, status, address, totalPrice, date }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={ () => navigate(`/seller/orders/${id}`) }
      aria-hidden="true"
      key={ id }
    >
      <h3>###############################</h3>
      <h4>Pedido</h4>
      <h2 data-testid={ `seller_orders__element-order-id-${id}` }>
        { `${id}` }
      </h2>
      <h2 data-testid={ `seller_orders__element-delivery-status-${id}` }>
        { `${status}` }
      </h2>
      <h4 data-testid={ `seller_orders__element-card-address-${id}` }>
        { `${address}` }
      </h4>
      <h2 data-testid={ `seller_orders__element-order-date-${id}` }>
        { `${date}` }
      </h2>
      <h2 data-testid={ `seller_orders__element-card-price-${id}` }>
        { `${totalPrice}` }
      </h2>
      <h3>###############################</h3>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
