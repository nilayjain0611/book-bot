import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Books from "./Pages/Books";
//import Home from "./Components/Home";
//import Header from "./Components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Books" element={<Books />} />


      </Routes>
  </>
  );
}

export default App;
