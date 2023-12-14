import React from 'react';
import Login from './components/login/Login';
import LandingPage from './components/LandingPage';
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/landing' element={<LandingPage />}/>
      </Routes>
    </>
  )
}

export default App