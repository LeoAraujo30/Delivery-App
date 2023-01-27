import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const fetchTokenRegister = async (dataTest) => {
  const {
    endpoint,
    body,
    navigate,
    setUserExists } = dataTest;

  await api.post(endpoint, body)
    .then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data));
      setUserExists(false);
      navigate('/customer/products');
    })
    .catch(() => {
      setUserExists(true);
    });
  return data;
};

export default fetchTokenRegister;
