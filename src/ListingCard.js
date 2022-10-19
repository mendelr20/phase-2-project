import React from 'react'

export default function ListingCard({nurse, voteCallback}) {
  function voteClick(){
    voteCallback(nurse)
  }
  return (
    <div className="card" key={nurse.id}>
        {nurse.name}
        <p/>
        Salary: {nurse.salary}
        <p/>
        Votes: {nurse.votes}
        <p/>
        <button onClick={() => voteClick(nurse)}>Vote</button>
    </div>
  )
}

