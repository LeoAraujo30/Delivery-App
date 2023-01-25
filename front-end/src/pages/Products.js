import React, { useEffect, useState } from 'react';
import fetchProducts from '../api/fetchProducts';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      { products.map(
        ({ price, url_image: urlImage, name, id }) => (
          <Card
            key={ id }
            index={ id }
            price={ price }
            urlImage={ urlImage }
            name={ name }
          />),
      )}
    </>
  );
}
