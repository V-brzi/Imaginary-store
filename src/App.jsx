import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Store from "./pages/Store";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/Imaginary-store" element={<Home />} />
        <Route exact path="/Imaginary-store/store" element={<Store />} />
        <Route exact path="/Imaginary-store/favorites" element={<Favorites />} />
        <Route exact path="/Imaginary-store/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
