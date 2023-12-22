import React from 'react';
import {supabase} from "../createClient";
import "./css/userpagestyle.css";

import { useNavigate } from "react-router-dom";

const UserPage = () => {
  
  const navigate = useNavigate();

  const handleOnClick = async (event) => {
    event.preventDefault();
    try {
      const { error } = await supabase.auth.signOut();
      if (error){
         throw error;
      }else{
        navigate("/");
      }    
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div>
      <h1>User Page</h1>
      <a onClick={handleOnClick}>Sign Out</a>
    </div>
  )
}

export default UserPage;