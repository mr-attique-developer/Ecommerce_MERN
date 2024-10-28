// src/App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white min-h-screen">
      <Navbar/>
   <Outlet/>
   <Footer/>
</div>
  );
};

export default App;
