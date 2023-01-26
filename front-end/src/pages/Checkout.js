import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AddressInput from '../components/AddressInput';
import TableCheckout from '../components/TableCheckout';
// import AppContext from '../utils/AppContext';

function Checkout() {
  const [isButtonDisable, setIsButtonDisable] = useState('');
  const [invalidRegister, setInvalidRegister] = useState(false);
  // const { email, setEmail, password, setPassword,
  //   username, setUsername } = useContext(AppContext);

  // const navigate = useNavigate();
  // const handleClick = async (body) => {
  //   const api = axios.create({
  //     baseURL: 'http://localhost:3001/user',
  //   });
  //   try {
  //     const { data } = await api.post('/register', body);
  //     const userObj = { name: username, email, role: 'customer', token: data };
  //     localStorage.setItem('user', JSON.stringify(userObj));
  //     setInvalidRegister(false);
  //     navigate(`/${userObj.role}/products`);
  //   } catch (_error) {
  //     setInvalidRegister(true);
  //   }
  // };

  // const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);

  useEffect(() => {
    // if (isValidEmail(email)
    //   && password.length >= MIN_LENGHT_PASS
    //   && username.length >= MIN_LENGHT_NAME) {
    //   setIsButtonDisable(false);
    // } else {
    // setIsButtonDisable(true);
    // }
  }, []);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <TableCheckout />
        {/* <AddressInput /> */}
      </div>
    </div>
  );
}

export default Checkout;
