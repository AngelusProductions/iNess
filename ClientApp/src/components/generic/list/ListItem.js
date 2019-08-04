import React from 'react'

const ListItem = item =>
  Object.keys(item).map(key => {
    return <p>{key} - {item[key]}</p>
  })

export default ListItem
