import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  );
}

export default App;
