import axios from 'axios';

export const SneakersSevice = {
    _apiUrl: '',

    getAllProducts: async function() {
        try {
            const products = await axios.get(`${this._apiUrl}/items`);

            return products.data;
        } catch(err) {
            alert('Ошибка получения продуктов с сервера');
            console.error(err);
        }
    },
}