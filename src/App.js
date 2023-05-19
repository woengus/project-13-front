import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import User from "./pages/User";
import Navbar from "./component/Navbar";
import React, { useEffect } from "react";
import { getProfile } from "./services/user";
import { setProfile } from "./store/user.slice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      getProfile(localStorage.token).then((res) => {
        console.log(res);
        dispatch(setProfile(res));
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
