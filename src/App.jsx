import React from  'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import MainHome from './pages/MainHome'

function App() {
  

  return (
    <div className="app">
{/*        
        <Home />
        <Footer />
      */}
      <MainHome />
    </div>
  )
}

export default App
