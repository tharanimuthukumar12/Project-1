// src/App.js
import logo from './logo.svg';
import './App.css';
import './Header.css';
import Header from './Component/Header';
import Footer from './Component/footer';
import Home from  './Pages1/home';
import About from  './Pages1/About';
import Reservation from './Pages1/Reservation';
import Gallery from './Pages1/Gallery';
import Menu from './Pages1/Menu';
import Contact from './Pages1/Contact';
import Update from './Pages1/Update';
import Edit from './Pages1/Edit';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Triggering redeploy

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
