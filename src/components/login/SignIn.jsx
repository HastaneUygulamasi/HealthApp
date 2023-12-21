import React, { useState } from "react";
import { supabase } from "../../createClient";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {

  const [state, setState] = React.useState({
    mail: "",
    password: ""
  });

  const [error, setError] = useState("")
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  /*  useEffect(() => {
     fetchUsers()
   }, [])
 
   const fetchUsers = async () => {
     const { data } = await supabase
       .from('users')
       .select("*")
     setUsers(data)
   } */

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, password } = state;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: mail,
        password: password
      })

      if (error) {
        throw error;
      }
      navigate("/landing")
    } catch (error) {
      alert(error)
    }

    if (mail === "") {
      setErrorMail([])
    } else if (mail) {
      setErrorMail("")
    }
    if (password === "") {
      setErrorPassword([])
    } else if (password) {
      setErrorPassword("")
    }


    /* users.forEach((user) => {
      if(mail === user.mail && password === user.password) {
        navigate("/landing")
      }else if(mail !== "" && password !== "") {
         if(mail !== user.mail || password !== user.password){
          setError([])
        }
      }
    }) */


  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="email"
          name="mail"
          onChange={handleChange}
        />
        <label className={errorMail ? "errorMail" : "no-error-mail"}>Please enter an email address!</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <label className={errorPassword ? "errorPassword" : "no-error-password"}>Please enter a password!</label>
        <label className={error ? "error" : "no-error"}>Incorrect email or password.</label>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
