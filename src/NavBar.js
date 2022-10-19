import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(){
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Nurses">Nurses</NavLink>
    </div>
  )
}

