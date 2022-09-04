import React from 'react';
import { Order } from '../components/Order/Order';
import EmptyPage from '../components/EmptyPage';

export function Orders({ orders }) {
  const renderOrders = () => {
    return orders.map((item) => (
      <Order key={item.id} id={item.id} products={item.products} total={item.total} />
    ));
  };

  return (
    <section className="content orders">
      <div className="content-header">
        <h1 className="content-title">Мои покупки</h1>
      </div>
      <div className="content-wrapper">
        {orders.length ? (
          renderOrders()
        ) : (
          <EmptyPage
            imageUrl="/img/empty/orders.png"
            title="У вас нет заказов"
            text="Оформите хотя бы один заказ."
          />
        )}
      </div>
    </section>
  );
}
