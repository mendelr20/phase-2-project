import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom";

import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Nurses from "./Nurses";

export default function App() {
  const [list, setList] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/nurses')
    .then(res => res.json())
    .then(data => setList(data))
  })

  function voteCallback(nurse){
      fetch(`http://localhost:3000/nurses/${nurse.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "votes": nurse.votes + 1,
        }),
      })
        .then((r) => r.json())
        .then((r) => console.log(r));
  }
  
  return (
    <div className="App">
      <Header />
      <NavBar />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Nurses">
            <Nurses list={list} voteCallback={voteCallback}/>
          </Route> 
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}



// Why the Dom resets