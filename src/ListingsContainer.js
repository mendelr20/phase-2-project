import React from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({nurseList,addVote})  {

  
  return (
    <div className='cards'>
        {nurseList.map((nurse) => <ListingCard nurse={nurse} addVote={addVote} />)}
    </div>
  )
}

