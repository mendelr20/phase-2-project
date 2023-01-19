import React from 'react'
import ListingsContainer from './ListingsContainer'
import { NavLink } from "react-router-dom";

export default function NursingSpecialties({list, voteCallback}){
  
  return (
    <div>
      <h1>Nurses</h1>
      <NavLink to="/NewNurse">New Nurse</NavLink>
      <ListingsContainer list={list} voteCallback={voteCallback} />
      
    </div>
  )
}

