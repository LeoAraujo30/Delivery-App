import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
