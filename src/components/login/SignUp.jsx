import React from "react";
import { supabase } from "../../createClient";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [state, setState] = React.useState({
    mail: "",
    name: "",
    surname: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const handleOnSubmit = async (event) => {

    const { mail, name, surname, password } = state;

    if (!mail || !name || !surname || !password) {
      alert("Please fill in all the fields correctly!")
      return
    }

    const { data, error } = await supabase
      .from('users')
      .insert([{ mail, name, surname, password }])
      handleChange(event);

    if (error) {
      alert(error)
    }
    if (!data) {
      alert("Successfully registered!");
      handleChange(event);
      navigate("/");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
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
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
