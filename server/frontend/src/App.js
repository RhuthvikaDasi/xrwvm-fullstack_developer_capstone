import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<div></div>} />
        <Route path="/dealers" element={<Dealers/>} />
        <Route path="/dealer/:id" element={<Dealer/>} />
        <Route path="/postreview/:id" element={<PostReview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
