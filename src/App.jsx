import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Catalog from './pages/Catalog'
import About from './pages/About';
import HomePage from './pages/HomePage';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <HomePage />
        <Catalog />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App
