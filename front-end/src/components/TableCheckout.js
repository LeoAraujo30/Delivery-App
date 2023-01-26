import React, { useEffect, useState } from 'react';
import AppContext from '../utils/AppContext';

function TableCheckout() {
  const [products, setProducts] = useState([]);
  const { setTotalPrice } = useContext(AppContext);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('carrinho')));
  }, []);

  useEffect(() => {}, [products]);

  removeItemCart = (name) => {
    const newProducts = products.filter((product) => product.name !== name);
    localStorage.setItem('carrinho', JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  sumValues = () => {
    const result = products
      .reduce((acc, product) => acc + (product.value * product.quantity), 0);
    setTotalPrice(result);
    return result;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Descrição</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Unitário</th>
            <th scope="col">Sub-total</th>
            <th scope="col">Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => {
            const { name, quantity, value } = product;
            return (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {`R$ ${value}`}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {`R$ ${(value * quantity).toFixed(2)}`}
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ () => removeItemCart(name) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${sumValues().toFixed(2)}`}
      </h2>
    </div>
  );
}

export default TableCheckout;
