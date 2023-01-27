import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(){
  return (
    <div class="ui three item menu">
      <a class="item">
        <i class="home icon"></i>
        <NavLink to="/">Home</NavLink>
      </a>
      <a class="item">        
        <i class="info circle icon"></i>
        <NavLink to="/About">About</NavLink>
      </a>
      <a class="item">
        <i class="user md icon"></i>
        <NavLink to="/Nurses">Nurses</NavLink>
      </a>
    </div>
  )
}

