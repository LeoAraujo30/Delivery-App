import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchAuth = async (endpoint, headers, setOrders) => {
  await api.get(endpoint, headers)
    .then(({ data }) => setOrders(data))
    .catch((err) => {
      console.log(err.message);
    });
};

export default fetchAuth;
