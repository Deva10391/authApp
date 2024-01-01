import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}
