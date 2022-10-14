import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Header from './Header';
import Home from "./Home";
import About from "./About";
import Nurses from "./Nurses";

export default function App() {
  const [list, setList] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/nurses')
    .then(res => res.json())
    .then(data => setList(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Nurses">
          <Nurses />
        </Route>
      </BrowserRouter>
    </div>
  );
}



