import './App.css';
import './components/products.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './components/landing';
import PlantList from './components/products';
import ShoppingCart from "./components/shoppingcart"
import Navigate from './components/navigate'

function App() {
  return (
    <>
      <Router>
        <nav>
          <Navigate />
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/products" element={<PlantList />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;

