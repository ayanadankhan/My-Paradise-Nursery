// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import Header from './Header';

function App() {
  const location = useLocation();
  
  // Determine if the current route is the landing page
  const isLandingPage = location.pathname === "/";

  return (
    <div className='w-100'>
      {/* Conditionally render Header based on the current route */}
      {!isLandingPage && <Header />}
      <Routes>
        <Route path="/My-Paradise-Nursery" element={<LandingPage />} />
        <Route path="/My-Paradise-Nursery/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
