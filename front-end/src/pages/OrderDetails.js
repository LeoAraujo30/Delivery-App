import React from 'react';
import Navbar from '../components/Navbar';
import TableOrderDetails from '../components/TableOrderDetails';

function OrderDetails() {
  return (
    <div>
      <div>
        <Navbar />
        <TableOrderDetails />
      </div>
    </div>
  );
}

export default OrderDetails;
