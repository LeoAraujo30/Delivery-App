import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TableSellerOrderDetails() {
  const [sale, setSale] = useState({});
  const { id } = useParams();

  const handleClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/sale',
    });
    await api.put('/status', body);
    setSale({ ...sale, status: body.newStatus });
  };

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

  return (
    <div>
      <div>
        <h3
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {sale.id}
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {sale.status}
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {handleDate()}
        </h3>

        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ sale.status !== 'Pendente' }
          onClick={ () => { handleClick({ saleId: id, newStatus: 'Preparando' }); } }
        >
          Preparar Pedido
        </button>

        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ sale.status !== 'Preparando' }
          onClick={ () => { handleClick({ saleId: id, newStatus: 'Em Tr??nsito' }); } }
        >
          Saiu pra Entrega
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Descri????o</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Unit??rio</th>
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
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  {name}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {`${price.split('.')}`}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {`${(Number(price) * quantity).toFixed(2)}`.replace('.', ',')}
                </td>
              </tr>
            );
          }) : '' }
        </tbody>
      </table>
      <h2 data-testid="seller_order_details__element-order-total-price">
        { sale.products ? `Total: R$ ${sumValues().split('.')}` : ''}
      </h2>
    </div>
  );
}

export default TableSellerOrderDetails;
