import React from "react";
import Home from "./Component/chat/Home/Home";
import Sign from "./Component/Sign";
import Login from "./Component/login"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign></Sign>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/home" element={<Home></Home>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
