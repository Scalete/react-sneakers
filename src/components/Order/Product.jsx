import React from 'react';

export function Product({ imageUrl, title, price }) {
  return (
    <>
      <tr className="order-item">
        <td name="Предмет" className="item">
          <img src={imageUrl} alt="Order Item" />
          <span>{title}</span>
        </td>
        <td name="Цена" className="price">
          {price} грн
        </td>
      </tr>
      <tr>
        <td style={{ paddingBottom: '10px' }}></td>
      </tr>
    </>
  );
}
