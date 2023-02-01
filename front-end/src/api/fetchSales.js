const PORT = 3001;
const baseURL = 'http://localhost:';

const fetchSales = async (id) => {
  const response = await fetch(`${baseURL}${PORT}/user/seller/${id}/sales`);
  const data = await response.json();
  return data;
};

module.exports = {
  fetchSales,
};
