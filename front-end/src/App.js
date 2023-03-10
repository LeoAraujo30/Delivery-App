import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Checkout from './pages/Checkout';
import AdminManage from './pages/AdminManage';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import CustomerOrder from './pages/CustomerOrder';
import OrderDetails from './pages/OrderDetails';
import SellerOrderDetails from './pages/SellerOrderDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders" element={ <CustomerOrder /> } />
      <Route exact path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
      <Route exact path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}

export default App;
