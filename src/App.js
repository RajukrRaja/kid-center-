import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Register from './Components/Register/Register';
import Contact from './Components/Pages/Contact';
import Service from './Components/Pages/Service.jsx';
import Mentor from './Components/Mentor/Mentor';
import Home from './Components/Home/Home.jsx'
import Login from './Components/Pages/Login.jsx';


import About from './Components/Pages/About.jsx';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
   
       
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
