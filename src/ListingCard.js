import React from 'react'

export default function ListingCard({nurse, addLike}) {
  function likeClick(){
    addLike(nurse)
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
              Likes: {nurse.likes}
          </div>
          <div class="extra content">
            <a>
            <button class="ui basic button" onClick={() => likeClick(nurse)}>
              <i class="like basic icon"></i>
              Like
              </button>
              
            </a>
          </div>
        </div>
    </div>
    
  )
}

