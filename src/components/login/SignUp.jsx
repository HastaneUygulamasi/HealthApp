import React from "react";
import { supabase } from "../../createClient";

const SignUpForm = () => {
  const [state, setState] = React.useState({
    mail: "",
    name: "",
    surname: "",
    password: ""
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, name, surname, password } = state;

    if (!mail || !name || !surname || !password) {
      alert("Please fill in all the fields correctly!")
      return
    }

    try {
      const { error } = await supabase.auth.signUp({ email: mail, password: password });

      await supabase.from('users').insert([{ mail, name, surname, password }])

      setState({ mail: "", name: "", surname: "", password: "" });

      if (error) {
        setState({ mail: mail, name: name, surname: surname, password: password });
        throw error;
      }
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>

        <input
          type="email"
          name="mail"
          value={state.mail}
          onChange={handleChange}
          placeholder="email"
        />

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="firstname"
        />

        <input
          type="text"
          name="surname"
          value={state.surname}
          onChange={handleChange}
          placeholder="surname"
        />

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
