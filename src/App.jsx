import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
