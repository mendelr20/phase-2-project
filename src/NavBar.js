import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/NursingSpecialties">Nursing Specialties</NavLink>
    </div>
  )
}

export default NavBar
