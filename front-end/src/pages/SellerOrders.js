import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import fetchSales from '../api/fetchSales';
import OrderCard from '../components/OrderCard';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const lsUser = JSON.parse(localStorage.getItem('user'));

  const getOrders = async () => {
    const data = await fetchSales.fetchSales(lsUser.id);
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="pages">
      <Navbar />
      <div id="sales">
        { orders !== [] && orders.map(
          (e) => (
            <OrderCard
              key={ e.id }
              id={ e.id }
              status={ e.status }
              address={ `${e.deliveryAddress}, ${e.deliveryNumber}` }
              totalPrice={ e.totalPrice }
              date={ e.saleDate }
            />
          ),
        )}
      </div>
    </div>
  );
}
