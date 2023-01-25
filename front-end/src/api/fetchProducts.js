import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchProducts = async (setProducts) => {
  const endpoint = '/products';

  await api.get(endpoint)
    .then((data) => {
      setProducts(data.data);
    })
    .catch((err) => {
      setProducts(['erro:', err.message]);
    });
};

export default fetchProducts;
