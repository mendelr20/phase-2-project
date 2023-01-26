import React from 'react'
import ListingsContainer from './ListingsContainer'
import { NavLink } from "react-router-dom";

export default function NursingSpecialties({nurseList, addVote}){
  
  return (
    <div>
      <h1>Nurses</h1>
      <NavLink to="/NewNurse">New Nurse</NavLink>
      <ListingsContainer nurseList={nurseList} addVote={addVote} />
      
    </div>
  )
}

