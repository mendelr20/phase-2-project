import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(){
  return (
    <div class="ui three item menu">
      <div class="ui animated button" tabindex="0">
        <div class="visible content">
           <i class="home icon"></i>
        </div>
        <div class="hidden content">
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
      <div class="ui vertical animated button" tabindex="0">
        <div class="visible content">
          <i class="info circle icon"></i>
        </div>
      <div class="hidden content">
        <NavLink to="/About">About</NavLink>
      </div>
        
      </div>
      <div class="ui animated fade button" tabindex="0">
        <div class="visible content">
          <i class="user md icon"></i>
        </div>
        <div class="hidden content">
          <NavLink to="/Nurses">Nurses</NavLink>
        </div>
      </div>
      {/* <a class="item">
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
      </a> */}
    </div>
  )
}

