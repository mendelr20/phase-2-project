import React from 'react'
import ListingCard from './ListingCard'

export default function ListingsContainer({list})  {
    console.log(list)
  return (
    <div className='cards'>
        {list.map((nurse) => <ListingCard nurse={nurse}/>)}
    </div>
  )
}

