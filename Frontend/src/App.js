import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Course from "./pages/Course.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
