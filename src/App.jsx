import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className="main-content">
        <Navbar></Navbar>
        <h1> Hello world from react</h1>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
