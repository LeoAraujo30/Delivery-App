const url = 'http://localhost:3001/login';

const fetchEmailDb = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchEmailDb;
