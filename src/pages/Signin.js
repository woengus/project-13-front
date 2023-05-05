import React from "react";
import { useState } from "react";
import { login } from "../services/user";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //redirige vers la page
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((token) => {
        console.log(token);
        localStorage.token = token;
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signin;
