import logo from "./logo.svg";
import Navigation from "./componets/Layout/Navigation";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Department from "./pages/Department";
import Employee from "./pages/Employee";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <h1 className="text-center">This is React tutorial</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Department" element={<Department />} />
        <Route path="Employee" element={<Employee />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
