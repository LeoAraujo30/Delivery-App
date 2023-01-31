import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import fetchSales from '../api/fetchSales';
import OrderCard from '../components/OrderCard';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const data = await fetchSales.fetchSales();
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      { orders !== [] && orders.map(
        (e) => (
          <OrderCard
            key={ e.id }
            id={ e.id }
            status={ e.status }
            address={ e.delivery_address }
            totalPrice={ e.total_price }
            date={ e.sale_date }
          />
        ),
      )}
    </div>
  );
}
