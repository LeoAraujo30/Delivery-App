import React from 'react';
import { useNavigate } from 'react-router-dom';
// import getLocalStorage from '../services/getLocalStorage';

function Navbar() {
  // const [user, setUser] = useState({
  //   userName: '',
  //   role: '',
  // });

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // const getUser = getLocalStorage('user');

  // useEffect(() => {
  //   if (!getUser) {
  //     navigate('/login');
  //     console.log('voltou para login');
  //   }

  //   if (getUser) {
  //     const { name, role } = getUser;
  //     setUser({ userName: name, role });
  //     console.log(`fez o login de ${role}`);
  //   }
  // }, []);

  const customerNavbar = (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        products
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/customer/orders') }
      >
        orders
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {/* { user.userName } */}
        Nome do usuário
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        quit
      </button>
    </nav>
  );

  return customerNavbar;
}

export default Navbar;
