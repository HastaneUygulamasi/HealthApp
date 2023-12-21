import React from 'react';
import Login from './components/login/Login';
import UserPage from './components/UserPage'
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/landing' element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App