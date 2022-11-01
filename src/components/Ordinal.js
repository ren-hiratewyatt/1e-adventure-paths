const Ordinal = ({ endLvl }) => {
  let ordString = ''
  switch (endLvl) {
    case 1:
      ordString = endLvl + 'st'
      break
    case 2:
      ordString = endLvl + 'nd'
      break
    case 3:
      ordString = endLvl + 'rd'
      break
    default:
      ordString = endLvl + 'th'
  }

  return (
    <div className="ordinal">
      <h3>End Level</h3>
      <p className="ordinalStr">{ordString}</p>
    </div>
  )
}

export default Ordinal
