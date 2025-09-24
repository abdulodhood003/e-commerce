import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';      // Navbar.jsx
import Footer from './components/Footer';      // Footer.jsx
import SearchBar from './components/SearchBar';// SearchBar.jsx

import Home from './pages/Home';              // Home.jsx
import Collection from './pages/Collection';  // Collection.jsx
import About from './pages/About';            // About.jsx
import Contact from './pages/Contact';        // Contact.jsx
import Product from './pages/Product';        // Product.jsx
import Cart from './pages/Cart';              // Cart.jsx
import Login from './pages/Login';            // Login.jsx
import PlaceOrder from './pages/PlaceOrder';  // PlaceOrder.jsx
import Orders from './pages/Orders';          // Orders.jsx
import Verify from './pages/Verify';          // Verify.jsx moved from admin

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
