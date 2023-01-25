import PropTypes from 'prop-types';
import React from 'react';

export default function CardProduct({ id, price, name, urlImage }) {
  return (
    <div
      key={ id }
    >
      <span
        data-testid={
          `customer_products__element-card-price-${id}`
        }
      >
        { price }
      </span>
      <img
        height="100px"
        width="100px"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="Imagem do produto"
      />
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </h2>
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
