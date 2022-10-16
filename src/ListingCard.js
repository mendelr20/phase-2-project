import React from 'react'

export default function ListingCard({nurse}) {
    
  return (
    <div className="card">
        {nurse.name}
        <p/>
        Salary: {nurse.salary}
        <p/>
        Votes: {nurse.votes}
        <p/>
        <button>Vote</button>
    </div>
  )
}

