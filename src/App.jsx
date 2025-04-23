import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Catalog from './pages/Catalog'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <Catalog></Catalog>
          <About></About>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
