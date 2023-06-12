import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const user = useSelector((state) => state.user.user);
  console.log(isLogged);
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/signin";
  };
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {isLogged ? (
        <div className="flex">
          <NavLink className="main-nav-item" to="/profile">
            <div>
              <i className="fa fa-user-circle">
                <span className="name-navbar">{user.firstName}</span>
              </i>
            </div>
          </NavLink>
          <NavLink className="main-nav-item" to="/signin" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
