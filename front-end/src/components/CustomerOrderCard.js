import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CustomerOrderCard({ id, status, saleDate, price }) {
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
              { format(Date.parse(saleDate), 'dd/MM/yyyy') }
            </div>
            <div
              data-testid={ `customer_orders__element-card-price-${id}` }
            >
              { price.replace('.', ',') }
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
  price: PropTypes.number.isRequired,
};
