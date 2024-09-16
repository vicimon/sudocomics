import React from "react";
import "./style/App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Browse from "./pages/browse";

import AdmLogin from "./pages/adm-login";
import AdmCadastro from "./pages/adm-cadastro";
import CadHq from "./pages/Hqcad";

import Autorpage from "./pages/autorpage";
import Favorites from "./pages/favorites";
import Hqpage from "./pages/hqpage";
import Catalogue from "./pages/catalogue";
import Editorapage from "./pages/editorapage";
import Userpage from "./pages/userpage";
import Avengers from "./pages/Avengers";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<AdmCadastro/>}></Route>
        <Route path="/admlogin" element={<AdmLogin/>} />
        <Route path="/cadHq" element={<CadHq/>} />

        <Route path="/browse" element={<Browse />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/autorpage" element={<Autorpage />} />
        <Route path="/hqpage" element={<Hqpage />} />
        <Route path="/editorapage" element={<Editorapage />} />
        <Route path="/catalogue/:id" element={<Avengers />} />
      </Routes>
    </div>
  );
}

export default App;
