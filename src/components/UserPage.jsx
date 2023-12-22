import React from 'react';
import { useAuth } from '../context/AuthProvider';
import "./css/userpagestyle.css";

const UserPage = () => {

  const { user } = useAuth();
  const { signOut } = useAuth();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>User Page</h1>
      <p>You are logged in and your email address is {user.email}</p>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default UserPage;