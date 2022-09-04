import React from 'react';
import { Product } from './Product';

export function Order({ id, products, total }) {
  const renderProducts = () => {
    return products.map((item, index) => (
      <Product key={index} imageUrl={item.imageUrl} title={item.title} price={item.price} />
    ));
  };

  return (
    <div className="order">
      <h2>Заказ #{id}</h2>
      <table width="100%">
        <thead>
          <tr>
            <th>Предмет</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
      </table>
      <table width="100%">
        <thead>
          <tr>
            <th style={{ textAlign: 'center', paddingTop: '10px', fontSize: '24px' }}>
              Итого (с учетом налога 5%)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="order-item">
            <td style={{ padding: '20px' }} name="Итого (с учетом налога 5%)" className="total">
              {total} грн
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
