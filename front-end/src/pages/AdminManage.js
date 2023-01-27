import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  const handleClick = async (body) => {
    const api = axios.create({
      baseURL: 'http://localhost:3001/user',
    });
    try {
      await api.post('/registerByAdm', body);
      setInvalidRegister(false);
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
      >
        Cadastrar
      </button>

      { (invalidRegister) ? (
        <span data-testid="admin_manage__element-invalid-register">
          Dados Invalidos
        </span>
      ) : ''}

    </div>
  );
}

export default AdminManage;
