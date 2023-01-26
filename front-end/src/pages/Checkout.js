import React from 'react';
import AddressInput from '../components/AddressInput';
import TableCheckout from '../components/TableCheckout';

function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <TableCheckout />
        <AddressInput />
      </div>
    </div>
  );
}

export default Checkout;
