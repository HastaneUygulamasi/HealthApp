import React from 'react';
import Login from './components/login/Login';
import UserPage from './components/UserPage';
import AuthRoute from './context/AuthRoute';
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<UserPage />} />
          <Route path="/home" element={<UserPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App