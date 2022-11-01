import React from 'react'
import Mechanics from './Mechanics'
import Ordinal from './Ordinal'
import PubDate from './PubDate'

const Spotlight = (props) => {
  console.log(Array.isArray(props.aps.uniqueMechanics))
  return (
    <div className="book">
      <img className="coverImg" src={props.aps.imgPath} />
      <h2>{props.aps.title}</h2>
      <p className="description">
        It is the year {props.aps.gameDate}... and {props.aps.desc}
      </p>
      <PubDate pubdate={props.aps.pubDates} />
      <Ordinal endLvl={props.aps.endLevel} />
      <div className="mechanics">
        <h3 className="mechHeader">Unique Mechanics</h3>
        {props.aps.uniqueMechanics.map((mechs) => (
          <Mechanics key={props.aps.uniqueMechanics.id} mechs={mechs} />
        ))}
      </div>
    </div>
  )
}

export default Spotlight
/*  {props.aps.uniqueMechanics.map((mechs) => (
          <Mechanics key={genres.id} genres={genres} />
        ))}
        */
