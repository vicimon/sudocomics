import React from 'react';
import './style/App.css';
import Home from './pages/home';
import './style/body.css'
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;