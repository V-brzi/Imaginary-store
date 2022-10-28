import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Store from "./pages/Store";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Switch, Route} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/Imaginary-store" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Switch>
    </div>
  )
}

export default App
