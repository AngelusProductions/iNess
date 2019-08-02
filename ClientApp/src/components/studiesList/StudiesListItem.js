import React from 'react'

const StudiesListItem = ({ name, sponsor, protocol }) =>
  <div>
    <h3>{name}</h3>
    <p>{sponsor} - {protocol}</p>
  </div>

export default StudiesListItem
