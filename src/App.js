import React from 'react';
import { Cart } from './components/Cart/Cart';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { SneakersSevice } from './services/SneakersSevice';
import { SneakersContext } from './services/SneakersContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [favoriteProducts, setFavoriteProducts] = React.useState([]);
  const [cartVisibility, setCartVisibility] = React.useState(false);
  const [isContentLoading, setIsContentLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setCartProducts(await SneakersSevice.getAllCartProducts());
      setFavoriteProducts(await SneakersSevice.getAllFavoritesProducts());
      setProducts(await SneakersSevice.getAllProducts());
      setIsContentLoading(false);
    }

    fetchData();
  }, []);

  const isProductAddedToCart = (id) => {
    return cartProducts.filter((item) => item[0].id === id).length;
  };

  const isProductAddedToFavorites = (id) => {
    return favoriteProducts.filter((item) => item[0].id === id).length;
  };

  const onHandleCart = () => {
    setCartVisibility(!cartVisibility);

    if (!cartVisibility) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const onAddToCart = async (id, setOnAddToCartLoading) => {
    setOnAddToCartLoading(true);

    const foundProduct = products.filter((item) => item.id === id);
    const addedProduct = await SneakersSevice.addToCartProduct(foundProduct);

    setCartProducts((prev) => [...prev, addedProduct]);
    setOnAddToCartLoading(false);
  };

  const onDeleteCartProduct = async (id, cartItemId, setIsDeleteProductCartLoading) => {
    setIsDeleteProductCartLoading(true);
    await SneakersSevice.deleteCartProduct(cartItemId, id, setCartProducts, cartProducts);
    setIsDeleteProductCartLoading(false);
  };

  const onAddtoFavorites = async (id, setFavoriteLoading) => {
    setFavoriteLoading(true);

    const foundProduct = products.filter((item) => item.id === id);
    const addedProduct = await SneakersSevice.addToFavoritesProduct(foundProduct);

    setFavoriteProducts((prev) => [...prev, addedProduct]);
    setFavoriteLoading(false);
  };

  const onDeleteFavorite = async (id, favoriteItemId, setFavoriteLoading) => {
    setFavoriteLoading(true);
    await SneakersSevice.deleteFavoriteProduct(
      favoriteItemId,
      id,
      setFavoriteProducts,
      favoriteProducts,
    );
    setFavoriteLoading(false);
  };

  return (
    <SneakersContext.Provider
      value={{
        products,
        onAddToCart,
        onAddtoFavorites,
        cartProducts,
        onDeleteCartProduct,
        isProductAddedToCart,
        isProductAddedToFavorites,
        onDeleteFavorite
      }}>
      <div className="wrapper">
        <Cart visibility={cartVisibility} onHandleCart={onHandleCart} cartProducts={cartProducts} />
        <BrowserRouter>
          <Header onHandleCart={onHandleCart} />
          <main>
            <Routes>
              <Route path="/" element={<Main isContentLoading={isContentLoading} />} />
              <Route
                path="/favorites"
                element={<Favorites favoriteProducts={favoriteProducts} />}
              />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </SneakersContext.Provider>
  );
}

export default App;
