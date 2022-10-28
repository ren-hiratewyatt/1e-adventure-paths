import React from 'react'

const Spotlight = (props) => {
  return (
    <div className="book">
      <img className="coverImg" src={props.aps.imgPath} />
      <h2>{props.aps.title}</h2>
    </div>
  )
}

export default Spotlight
