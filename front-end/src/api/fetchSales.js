const PORT = 3001;
const baseURL = 'http://localhost:';

const mock = [
  {
    id: 1,
    total_price: '50,51',
    delivery_address: 'rua tal',
    delivery_number: 5,
    sale_date: '05/01/2023',
    status: 'Quase lá',
  },
  {
    id: 2,
    total_price: '22,95',
    delivery_address: 'rua b',
    delivery_number: 3,
    sale_date: '08/01/2021',
    status: 'Já foi',
  },
];

const fetchSales = async () => {
  // const response = await fetch(`${baseURL}${PORT}/user/getall`);
  // const data = await response.json();
  // return data;
  return mock;
};

module.exports = {
  fetchSales,
};
