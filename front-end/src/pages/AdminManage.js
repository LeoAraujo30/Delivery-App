import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import fetch from '../api/fetchUser';
import UsersTable from '../components/UsersTable';
import '../css/AdminManage.css';

const MIN_LENGHT_PASS = 6;
const MIN_LENGHT_NAME = 12;

function AdminManage() {
  const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);
  const [isButtonDisable, setIsButtonDisable] = useState('');
  const [invalidRegister, setInvalidRegister] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [role, setRole] = useState(' ');
  const [users, setUsers] = useState([]);

  const lsUser = JSON.parse(localStorage.getItem('user'));
  const { token } = lsUser;

  const getUsers = async () => {
    const data = await fetch.fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/user',
    });
    try {
      await api.post('/registerByAdm', body, { headers: { Authorization: token } });
      setInvalidRegister(false);
      getUsers();
    } catch (_error) {
      setInvalidRegister(true);
    }
  };

  useEffect(() => {
    if (isValidEmail(email)
      && password.length >= MIN_LENGHT_PASS
      && name.length >= MIN_LENGHT_NAME
      && role !== ' ') {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [email, password, name, role]);

  return (
    <div>
      <Navbar />
      <div className="div-form">
        <label htmlFor="name-input">
          Nome:
          <input
            className="name-input"
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Nome"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="email-input">
          Email:
          <input
            className="email-input"
            data-testid="admin_manage__input-email"
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Senha:
          <input
            className="password-input"
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="Senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="select">
          Tipo:
          <select
            name="select"
            className="select"
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value=" " defaultValue> </option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ isButtonDisable }
          onClick={ () => handleClick({ name, email, password, role }) }
          className="cadastrar-btn"
        >
          Cadastrar
        </button>

        { (invalidRegister) ? (
          <span data-testid="admin_manage__element-invalid-register">
            Dados Invalidos
          </span>
        ) : ''}
      </div>

      <h1>Tabela de usu??rios cadastrados</h1>
      <UsersTable allUsers={ users } getUsers={ getUsers } />
    </div>
  );
}

export default AdminManage;
