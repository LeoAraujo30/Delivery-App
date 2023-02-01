import React from 'react';
import PropTypes from 'prop-types';
import fetch from '../api/fetchUser';

export default function UsersTable({ allUsers, getUsers }) {
  const deleteUser = async (email) => {
    await fetch.deleteUser(email);
    getUsers();
  };
  return (
    <table border="1" cellSpacing="5">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          allUsers.length > 0 && allUsers.map((e) => (
            <tr key={ e.id }>
              <td>{ e.name }</td>
              <td>{ e.email }</td>
              <td>{ e.role }</td>
              <td>
                <button onClick={ () => deleteUser(e.email) } type="button">
                  Deletar
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  allUsers: PropTypes.instanceOf(Array).isRequired,
  getUsers: PropTypes.func.isRequired,
};
