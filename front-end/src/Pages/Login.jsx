import React from 'react';
import rockGlass from '../images/rockGlass.svg';
// import { useHistory } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <h2>Login</h2>
    </div>
  );
}

export default Login;
