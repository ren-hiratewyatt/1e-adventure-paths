import React from 'react'
import Mechanics from './Mechanics'
import Ordinal from './Ordinal'
import PubDate from './PubDate'

const Spotlight = (props) => {
  console.log(Array.isArray(props.aps.uniqueMechanics))
  return (
    <div className="book" id={props.aps.id}>
      <img className="coverImg" src={props.aps.imgPath} />
      <h2 className="bookTitle">{props.aps.title}</h2>
      <p className="description">
        It is the year {props.aps.gameDate}... and {props.aps.desc}
      </p>
      <PubDate pubdate={props.aps.pubDates} />
      <Ordinal endLvl={props.aps.endLevel} />
      <h3 className="mechHeader">Unique Mechanics</h3>
      <div className="mechanics">
        {props.aps.uniqueMechanics.map((mechs) => (
          <Mechanics key={mechs.id} mechs={mechs} />
        ))}
      </div>
      <h3>Links</h3>
      <div className="linkBox">
        <p className="wikiLink">
          <a href={props.aps.wikiLink}>Pathfinder Wiki</a>
        </p>
        <p className="playerGuideAON">
          <a href={props.aps.playersGuide} target="_blank">
            AON Player's Guide
          </a>
        </p>
        <p>
          <a href="#header">Back To Top</a>
        </p>
      </div>
    </div>
  )
}

export default Spotlight
/*  {props.aps.uniqueMechanics.map((mechs) => (
          <Mechanics key={genres.id} genres={genres} />
        ))}
        */
