import React from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({nurseList, addLike})  {

  
  return (
    <div className='ui cards'>
        {nurseList.map((nurse) => <ListingCard nurse={nurse} addLike={addLike} />)}
    </div>
  )
}

