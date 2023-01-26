import React from 'react';

function AdminManage() {
//   const isValidEmail = (emailAddress) => /\S+@\S+\.\S+/.test(emailAddress);

  return (
    <div>
      <label htmlFor="name-input">
        Nome:
        <input
          className="name-input"
          data-testid="admin_manage__input-name"
          type="text"
          placeholder="Nome"
        //   onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="email-input">
        Email:
        <input
          className="email-input"
          data-testid="admin_manage__input-email"
          type="email"
          placeholder="Email"
        //   onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password-input">
        Senha:
        <input
          className="password-input"
          data-testid="admin_manage__input-password"
          type="password"
          placeholder="Senha"
          // onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <label htmlFor="select">
        Tipo:
        <select
          name="select"
          data-testid="admin_manage__select-role"
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
        // disabled={ isButtonDisable }
        // onClick={ () => handleClick({ name: username, email, password }) }
      >
        Cadastrar
      </button>

    </div>
  );
}

export default AdminManage;
