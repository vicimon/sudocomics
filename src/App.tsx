import React from "react";
import "./style/App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Browse from "./pages/browse";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
