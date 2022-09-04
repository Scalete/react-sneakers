import { Card } from '../components/Card';
import EmptyPage from '../components/EmptyPage';

export const Favorites = ({ favoriteProducts }) => {
  const renderAllProducts = () => {
    return favoriteProducts.map((item) => {
      return (
        <Card
          key={item[0].id}
          favoriteItemId={item.id}
          id={item[0].id}
          title={item[0].title}
          price={item[0].price}
          imageUrl={item[0].imageUrl}
        />
      );
    });
  };

  return (
    <section className="content">
      <div className="content-header">
        <h1 className="content-title">Избранное</h1>
      </div>
      <div className="content-wrapper">
        {favoriteProducts.length ? (
          renderAllProducts()
        ) : (
          <EmptyPage
            imageUrl="/img/empty/favorite.png"
            title="Закладок нет :("
            text="Вы ничего не добавляли в закладки"
          />
        )}
      </div>
    </section>
  );
};
