import React from 'react';
// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminManage from './pages/AdminManage';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/:role/products" element={ <Products /> } />
      <Route exact path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}

export default App;
