import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TableOrdersCustomer from '../components/TableOrdersCustomer';

function CustomerOrders() {
  // const { id } = useParams();
  // useEffect(() => console.log(id), []);

  return (
    <div>
      <h2>Orders</h2>
      <div>
        <Navbar />
        <TableOrdersCustomer />
      </div>
    </div>
  );
}

export default CustomerOrders;
