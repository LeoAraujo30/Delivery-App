import React from 'react';
import Navbar from '../components/Navbar';
import TableSellerOrderDetails from '../components/TableSellerOrderDetails';

function SellerOrderDetails() {
  return (
    <div>
      <h2>SellerOrderDetails</h2>
      <div>
        <Navbar />
        <TableSellerOrderDetails />
      </div>
    </div>
  );
}

export default SellerOrderDetails;
