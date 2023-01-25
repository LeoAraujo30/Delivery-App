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
        ({ price, urlImage, name, index }) => (
          <Card
            key={ index }
            index={ index }
            price={ price }
            urlImage={ urlImage }
            name={ name }
          />
        ),
      )}
    </>
  );
}
