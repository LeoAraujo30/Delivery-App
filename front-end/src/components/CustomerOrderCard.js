import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CustomerOrderCard({ id, status, saleDate, totalPrice }) {
  const handleDate = () => {
    if (saleDate) {
      const arrayDate = (saleDate.split('T'))[0].split('-');
      return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
    }
  };
  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <div
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          { id }
        </div>
        <div>
          <div
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            { status }
          </div>
          <div>
            <div
              data-testid={ `customer_orders__element-order-date-${id}` }
            >
              { handleDate() }
            </div>
            <div
              data-testid={ `customer_orders__element-card-price-${id}` }
            >
              { totalPrice.replace('.', ',') }
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

CustomerOrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
