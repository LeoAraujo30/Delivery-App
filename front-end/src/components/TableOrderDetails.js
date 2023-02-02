import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const idStatus = 'customer_order_details__element-order-details-label-delivery-status';

function TableOrderDetails() {
  const [sale, setSale] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const api = axios.create({
        baseURL: 'http://localhost:3001/sale',
      });
      const { data } = await api.get(`/${id}`);
      setSale(data);
    };
    getData();
  }, []);

  const sumValues = () => {
    const result = sale.products.reduce((acc, product) => {
      const { SalesProduct: { quantity }, price } = product;
      return acc + (Number(price) * quantity);
    }, 0);
    return `${result.toFixed(2)}`;
  };

  const handleDate = () => {
    if (sale.saleDate) {
      const arrayDate = (sale.saleDate.split('T'))[0].split('-');
      return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
    }
  };

  const handleClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/sale',
    });
    await api.put('/status', body);
    setSale({ ...sale, status: body.newStatus });
  };

  return (
    <div>
      <div>
        <h3
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {sale.id}
        </h3>
        <h3
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { sale.seller ? sale.seller.name : ''}
        </h3>
        <h3
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {handleDate()}
        </h3>
        <h3
          data-testid={ idStatus }
        >
          {sale.status}
        </h3>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ sale.status !== 'Em Trânsito' }
          onClick={ () => { handleClick({ saleId: id, newStatus: 'Entregue' }); } }
        >
          Marcar como entregue
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Descrição</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Unitário</th>
            <th scope="col">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { sale.products ? sale.products.map((product, index) => {
            const { name, SalesProduct: { quantity }, price } = product;
            return (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {name}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {`${price.split('.')}`}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {`${(Number(price) * quantity).toFixed(2)}`.replace('.', ',')}
                </td>
              </tr>
            );
          }) : '' }
        </tbody>
      </table>
      <h2 data-testid="customer_order_details__element-order-total-price">
        { sale.products ? `Total: R$ ${sumValues().split('.')}` : ''}
      </h2>
    </div>
  );
}

export default TableOrderDetails;
