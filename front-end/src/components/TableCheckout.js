import React, { useContext, useEffect } from 'react';
import AppContext from '../utils/AppContext';

// const adasd = 2,20;

function TableCheckout() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('productsCart')));
  }, []);

  useEffect(() => {}, [products]);

  const removeItemCart = (name) => {
    const newProducts = products.filter((product) => product.name !== name);
    localStorage.setItem('productsCart', JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  const sumValues = () => {
    const result = products.reduce((acc, product) => acc + Number(product.subtotal), 0);
    return `${result}`;
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
            const { name, quantity, price, subtotal } = product;
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
                  {`${price.split('.')}`}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {`${subtotal.split('.')}`}
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
        {`Total: R$ ${sumValues().split('.')}`}
      </h2>
    </div>
  );
}

export default TableCheckout;
