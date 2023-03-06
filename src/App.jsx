import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import MainHome from './pages/MainHome'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './pages/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }));
      }
      else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {
          !user ? (
          <Home />
          ) :( 
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path='/profile' element={<ProfileScreen/>} />
          </Routes>
        )}

      </Router>
      <Footer />


    </div>
  )
}

export default App
