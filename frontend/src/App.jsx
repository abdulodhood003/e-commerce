import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';      // File: Navbar.jsx
import Footer from './components/Footer';      // File: Footer.jsx
import SearchBar from './components/SearchBar';// File: SearchBar.jsx

import Home from './pages/Home';              // File: Home.jsx (capitalize first letter)
import Collection from './pages/Collection';  // File: Collection.jsx
import About from './pages/About';            // File: About.jsx
import Contact from './pages/Contact';        // File: Contact.jsx
import Product from './pages/Product';        // File: Product.jsx
import Cart from './pages/Cart';              // File: Cart.jsx
import Login from './pages/Login';            // File: Login.jsx
import PlaceOrder from './pages/PlaceOrder';  // File: PlaceOrder.jsx
import Orders from './pages/Orders';          // File: Orders.jsx
import Verify from '../../admin/src/pages/Verify'; // File: Verify.jsx


import { ToastContainer, toast } from 'react-toastify';

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
  )
}

export default App
