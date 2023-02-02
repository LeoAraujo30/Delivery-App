import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../api/fetchProducts';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import setLocalStorage from '../services/setLocalStorage';
import CartContext from '../store/Cart.context';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(true);
  const [showTotalPrice, setShowTotalPrice] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const showItens = [];

  useEffect(() => {
    if (showTotalPrice === '0,00') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [showTotalPrice]);

  useEffect(() => {
    const totalPrice = cart
      .reduce((a, c) => a + Number(c.quantity * c.price), 0)
      .toFixed(2);
    const totalPriceCorrect = totalPrice.replace('.', ',');
    setShowTotalPrice(totalPriceCorrect);
  }, [cart]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div className="pages">
      <Navbar />
      <div id="products">
        { products.map(
          ({ price, urlImage, name, id }) => (
            <Card
              key={ id }
              id={ id }
              price={ price }
              urlImage={ urlImage }
              name={ name }
              showItens={ showItens }
            />
          ),
        )}
      </div>
      <Link
        to="/customer/checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        <button
          id="cartButton"
          disabled={ disable }
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => { setLocalStorage('productsCart', cart); setCart([]); } }
        >
          Ver carrinho: R$
          {
            cart.length === 0 ? '0,00' : showTotalPrice
          }
        </button>
      </Link>
    </div>
  );
}
