import React, { useEffect, useRef } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';

const App = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    locationRef.current = location;
  }, [location])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        if (locationRef.current.pathname === '/login') {
          navigate('/');
        }
      } else {
        console.log("Logged Out");
        navigate('/login')
      }
    });

    return () => unsubscribe();
  },[])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App