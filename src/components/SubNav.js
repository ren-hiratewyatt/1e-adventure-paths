import React from 'react'
const SubNav = (props) => {
  let idHref = '#'
  idHref += props.aps.id
  return (
    <p className="tocLink">
      *<a href={idHref}>{props.aps.title}</a>*
    </p>
  )
}

export default SubNav
