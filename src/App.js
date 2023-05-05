import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import User from "./pages/User";
import Navbar from "./component/Navbar";
function App() {
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
