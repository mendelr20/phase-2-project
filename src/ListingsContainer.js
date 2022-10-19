import React from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({list, voteCallback})  {

  
  return (
    <div className='cards'>
        {list.map((nurse) => <ListingCard nurse={nurse} voteCallback={voteCallback} />)}
    </div>
  )
}

