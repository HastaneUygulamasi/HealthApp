import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../createClient";

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

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, password } = state;

    try {
      const { error } = await supabase.auth.signInWithPassword({ email: mail, password: password })

      if (error) {
        throw error;
      }
      navigate("/home")
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
