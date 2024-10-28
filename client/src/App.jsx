// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer';
import CategoryPage from './pages/category/CategoryPage';
import Search from './pages/search/Search';
import ShopPage from './pages/shop/ShopPage';
import SingleProduct from './pages/shop/productDetails/SingleProduct';

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white min-h-screen">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart/>} /> 
      <Route path="/search" element={<Search/>} /> 
      <Route path="/categories/:categoryName" element={<CategoryPage/>} />
      <Route path="/shop/:id" element={<SingleProduct/>} />

    </Routes>
    <Footer/>
    </div>
  );
};

export default App;
