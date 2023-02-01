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
          allUsers.length > 0 && allUsers.map((e, index) => (
            <tr
              key={ e.id }
              data-testid={ `admin_manage__element-user-table-item-number-${index + 1}` }
            >
              <td data-testid={ `admin_manage__element-user-table-name-${index + 1}` }>
                { e.name }
              </td>
              <td data-testid={ `admin_manage__element-user-table-email-${index + 1}` }>
                { e.email }
              </td>
              <td data-testid={ `admin_manage__element-user-table-role-${index + 1}` }>
                { e.role }
              </td>
              <td data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }>
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
