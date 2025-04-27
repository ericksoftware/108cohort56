import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Catalog from './pages/Catalog'
import About from './pages/About';
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Navbar />
      <div className="main-container">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <HomePage />
        <Catalog />
        <About />
        <Admin />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  )
}

export default App
