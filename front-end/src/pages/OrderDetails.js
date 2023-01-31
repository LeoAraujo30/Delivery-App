import React from 'react';
import Navbar from '../components/Navbar';
import TableOrderDetails from '../components/TableOrderDetails';

function OrderDetails() {
  return (
    <div>
      <h2>OrderDetails</h2>
      <div>
        <Navbar />
        <TableOrderDetails />
      </div>
    </div>
  );
}

export default OrderDetails;
