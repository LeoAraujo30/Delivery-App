import React, { useEffect, useState } from 'react';
import fetchAuth from '../api/fetchAuth';
import CustomerOrderCard from '../components/CustomerOrderCard';
import Navbar from '../components/Navbar';

export default function CustomerOrder() {
  const { token, id } = JSON.parse(localStorage.getItem('user'));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const headers = { headers: { authorization: token } };
        await fetchAuth(`/sale/user/${id}`, headers, setOrders);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        { orders.length !== 0 ? orders.map((product) => (
          <CustomerOrderCard
            key={ product.id }
            id={ product.id }
            status={ product.status }
            saleDate={ product.saleDate }
            totalPrice={ product.totalPrice }
          />)) : <h2>Você ainda não possui pedidos! Faça o primeiro!</h2> }
      </div>
    </div>
  );
}
