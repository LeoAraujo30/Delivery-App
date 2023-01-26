import PropTypes from 'prop-types';
import React from 'react';

export default function CardProduct({ price, urlImage, name, index }) {
  return (
    <div>
      <h2 data-testid={ `customer_products__element-card-title-${index}` }>
        { name }
      </h2>
      <h2
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        { price.replace('.', ',') }
      </h2>
      <img
        height="100px"
        width="100px"
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ urlImage }
        alt="Imagem do produto"
      />
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${index}` }
        >
          +
        </button>
        <input
          type="number"
          min="0"
          data-testid={ `customer_products__input-card-quantity-${index}` }
          placeholder="0"
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
        >
          -
        </button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
