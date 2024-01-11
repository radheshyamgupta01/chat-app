import React from "react";
import Home from "./Component/Home/Home";
import Sign from "./Component/Auth/Sign"
import Login from "./Component/Auth/login"
import Page from "./Component/404PageNotFound/404Page";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import AddGroupMember from "./Component/GroupChat/AddGroupMember";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        <Route path="/member" element={<AddGroupMember/>}/>
        <Route path="*" element={<Page/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
