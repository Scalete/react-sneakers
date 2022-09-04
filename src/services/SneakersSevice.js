import axios from 'axios';

export const SneakersSevice = {
    _apiUrl: 'https://630e2ef9109c16b9abf681c0.mockapi.io',

    delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),

    getAllProducts: async function () {
        try {
            const products = await axios.get(`${this._apiUrl}/items`);

            return products.data;
        } catch (err) {
            alert('Ошибка получения всех продуктов');
            console.error(err);
        }
    },

    getAllCartProducts: async function () {
        try {
            const products = await axios.get(`${this._apiUrl}/cart`);

            return products.data;
        } catch (err) {
            alert('Ошибка получения продуктов из корзины');
            console.error(err);
        }
    },

    getAllOrders: async function () {
        try {
            const orders = await axios.get(`${this._apiUrl}/orders`);

            return orders.data;
        } catch (err) {
            alert('Ошибка получения продуктов из корзины');
            console.error(err);
        }
    },

    getAllFavoritesProducts: async function () {
        try {
            const products = await axios.get(`${this._apiUrl}/favorites`);

            return products.data;
        } catch (err) {
            alert('Ошибка получения продуктов из желаемых');
            console.error(err);
        }
    },

    addToCartProduct: async function (product) {
        try {
            const result = await axios.post(`${this._apiUrl}/cart`, product);

            return result.data;
        } catch (err) {
            alert('Ошибка добавления продукта на сервер');
            console.error(err);
        }
    },

    addToFavoritesProduct: async function (product) {
        try {
            const result = await axios.post(`${this._apiUrl}/favorites`, product);

            return result.data;
        } catch (err) {
            alert('Ошибка добавления продукта в желаемое');
            console.error(err);
        }
    },

    deleteCartProduct: async function (cartItemId, id, setCartProducts, cartProducts) {
        try {
            const result = await axios.delete(`${this._apiUrl}/cart/${cartItemId}`)
            setCartProducts(cartProducts.filter(item => item[0].id !== id));

            return result;
        } catch (err) {
            alert('Ошибка удаления продукта с сервера');
            console.error(err);
        }
    },

    deleteFavoriteProduct: async function (favoriteItemId, id, setFavoriteProducts, favoriteProducts) {
        try {
            const result = await axios.delete(`${this._apiUrl}/favorites/${favoriteItemId}`)
            setFavoriteProducts(favoriteProducts.filter(item => item[0].id !== id));

            return result;
        } catch (err) {
            alert('Ошибка удаления продукта из желаемого');
            console.error(err);
        }
    },

    formOrder: async function (cartProducts, setCartProducts, total, setOrders) {
        try {
            const order = {
                products: cartProducts.map(item => item[0]),
                total,
            }
            const result = await axios.post(`${this._apiUrl}/orders`, order);

            for (let i = 0; i < cartProducts.length; i++) {
                const item = cartProducts[i];
                await axios.delete(`${this._apiUrl}/cart/` + item.id);
                await this.delay(500);
            }

            setCartProducts([]);
            setOrders(prev => [...prev, result.data]);

            return result.data;
        } catch (err) {
            alert('Ошибка формирования заказа');
            console.error(err);
        }
    }
}