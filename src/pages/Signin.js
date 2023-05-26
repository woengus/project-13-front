import React from "react";
import { useState } from "react";
import { login } from "../services/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToken } from "../store/user.slice";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((token) => {
        console.log(token);
        localStorage.token = token;
        dispatch(getToken({ token: token }));
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
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
            {isError && <p className="error">Invalid email or password</p>}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signin;
