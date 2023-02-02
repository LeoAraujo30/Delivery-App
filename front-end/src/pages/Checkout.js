import React from 'react';
import AddressInput from '../components/CheckoutInput';
import Navbar from '../components/Navbar';
import TableCheckout from '../components/TableCheckout';

function Checkout() {
  return (
    <div>
      <div>
        <Navbar />
        <TableCheckout />
        <AddressInput />
      </div>
    </div>
  );
}

export default Checkout;
