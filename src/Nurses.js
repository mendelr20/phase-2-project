import React from 'react'
import ListingsContainer from './ListingsContainer'


export default function NursingSpecialties({list, voteCallback}){
  
  return (
    <div>
      <h1>Nurses</h1>
      <ListingsContainer list={list} voteCallback={voteCallback} />
      
    </div>
  )
}

