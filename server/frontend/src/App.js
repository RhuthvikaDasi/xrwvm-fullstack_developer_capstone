import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
