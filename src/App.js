import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css"
import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Nurses from "./Nurses";
import NewNurse from "./NewNurse";
import Counter from "./Counter";

//useEffect

//state
//prop
//talk code outloud

//paired programing 
export default function App() {
  const [nurseList, setNurseList] = useState([])

  function addNurse(newNurse){
    setNurseList([...nurseList, newNurse])
  }
  
  function updateVoteState(nurse) {
    const index = nurseList.findIndex(nur => nurse.id === nur.id)
    const updatedNurseList = [...nurseList.slice(0, index), nurse, ...nurseList.slice(index + 1),]
    setNurseList(updatedNurseList)
}
  
  useEffect(()=>{
    fetch('http://localhost:3000/nurses')
    .then(res => res.json())
    .then(data => setNurseList(data))
  },[])
  

  function addLike(nurse){
      fetch(`http://localhost:3000/nurses/${nurse.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "likes": nurse.likes + 1,
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
            <Nurses nurseList={nurseList} addLike={addLike}/>
          </Route> 
          <Route exact path="/NewNurse">
            <NewNurse addNurse={addNurse}/>
          </Route>
          <Route exact path="/Counter">
            <Counter/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}



