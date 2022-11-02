import React from 'react'
const SubNav = (props) => {
  let idHref = '#'
  idHref += props.aps.id
  return <a href={idHref}>{props.aps.title}</a>
}

export default SubNav
