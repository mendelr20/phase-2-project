import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom";

import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Nurses from "./Nurses";
import NewNurse from "./NewNurse";

export default function App() {
  const [nurseList, setNurseList] = useState([])

  function addNurse(newNurse){
    setNurseList([...nurseList, newNurse])
  }
  
  function updateVoteState(nurse){
    //const updatedNurseList = nurseList.filter(nur => nurse.id !== nur.id)
    const updatedNurseList = nurseList.findIndex((nur => nurse.id == 1));
    setNurseList([nurse, ...updatedNurseList])
    // styling event
    //use map to keep everything in the same order as started 

  }
  
  useEffect(()=>{
    fetch('http://localhost:3000/nurses')
    .then(res => res.json())
    .then(data => setNurseList(data))
  },[])
  

  function addVote(nurse){
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
        .then((nurse) => updateVoteState(nurse));
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
            <Nurses nurseList={nurseList} addVote={addVote}/>
          </Route> 
          <Route exact path="/NewNurse">
            <NewNurse addNurse={addNurse}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}



