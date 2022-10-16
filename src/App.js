import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom";

import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NursingSpecialties from "./NursingSpecialties";

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
      <NavBar />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/NursingSpecialties">
            <NursingSpecialties list={list}/>
          </Route> 
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}



