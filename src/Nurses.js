import React from 'react'
import ListingsContainer from './ListingsContainer'
import { NavLink } from "react-router-dom";

export default function NursingSpecialties({nurseList, addVote}){
  
  return (
    <div>
      <h1>
        <i class="user md icon"></i>
        Nurses
      </h1>
      <button class="ui basic button">
        <i class="add icon"></i>
        <i class="stethoscope icon"></i>
        <NavLink to="/NewNurse">New Nurse</NavLink>
      </button>
      
      <h1></h1>
      <ListingsContainer nurseList={nurseList} addVote={addVote} />
      
    </div>
  )
}

