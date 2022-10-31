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

  return <p className="ordinalStr">End level: {ordString}</p>
}

export default Ordinal
