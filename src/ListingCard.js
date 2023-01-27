import React from 'react'

export default function ListingCard({nurse, addVote}) {
  function voteClick(){
    addVote(nurse)
  }
  return (
    <div>
        <div class="ui card" key={nurse.id}>
          <div class="content">
            <a class="header">{nurse.name}</a>
            <div class="description">
              Salary: {nurse.salary}
            </div>
            <i class="user icon"></i>
              Votes: {nurse.votes}
          </div>
          <div class="extra content">
            <a>
            <button class="ui basic button" onClick={() => voteClick(nurse)}>
              <i class="icon user"></i>
              Vote
              </button>
              
            </a>
          </div>
        </div>
    </div>
    
  )
}

