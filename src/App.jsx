import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Store from "./pages/Store";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";
import {Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  )
}

export default App
