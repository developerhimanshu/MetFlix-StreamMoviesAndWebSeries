import React from  'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  

  return (
    <div className="App">
        <Home />
        <Footer />
    </div>
  )
}

export default App
