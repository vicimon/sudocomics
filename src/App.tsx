import React from "react";
import "./style/App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Browse from "./pages/browse";

import Autorpage from "./pages/autorpage";
import Favorites from "./pages/favorites";
import Hqpage from "./pages/hqpage";
import Catalogue from "./pages/catalogue";
import Editorapage from "./pages/editorapage";
import Userpage from "./pages/userpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/userpage" element={<Userpage />} />

        <Route path="/autorpage/:name" element={<Autorpage />} />
        <Route path="/hqpage/:name" element={<Hqpage />} />
        <Route path="/editorapage/:name" element={<Editorapage />} />
      </Routes>
    </div>
  );
}

export default App;
