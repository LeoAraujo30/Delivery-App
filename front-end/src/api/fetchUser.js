const PORT = 3001;
const baseURL = 'http://localhost:';

const fetchUsers = async () => {
  const response = await fetch(`${baseURL}${PORT}/user/getAllUsers`);
  const data = await response.json();
  return data;
};

const deleteUser = async (body) => {
  const lsUser = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await fetch(`${baseURL}${PORT}/user/delete`, {
      method: 'DELETE',
      body: JSON.stringify({ email: body }),
      headers: { Authorization: lsUser.token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  deleteUser,
  fetchUsers,
};
