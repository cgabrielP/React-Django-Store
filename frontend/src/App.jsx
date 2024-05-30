import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/error" element={<ErrorPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SingUp/>} />
      </Routes>
    </Router>
  );
};

export default App;
