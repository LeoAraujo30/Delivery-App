import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchToken = async (dataTest) => {
  const {
    endpoint,
    body,
    setIsFailed,
    navigate,
  } = dataTest;

  await api.post(endpoint, body)
    .then(({ data }) => {
      setIsFailed(false);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/customer/products');
    })
    .catch(() => {
      setIsFailed(true);
    });
};

export default fetchToken;
