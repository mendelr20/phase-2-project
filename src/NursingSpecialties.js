import React from 'react'
import ListingsContainer from './ListingsContainer'


function NursingSpecialties({list}){
  return (
    <div>
      <h1>Nurses</h1>
      <ListingsContainer list={list} />
      
    </div>
  )
}

export default NursingSpecialties