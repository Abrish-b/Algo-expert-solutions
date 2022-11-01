import React from 'react'

const compReact = ({primary, user}) => {
  return ( primary ? <h1> Welcome{user !== null ? ` ${user}` : '!' }</h1> : <h2> Welcome{user !== null ? ` ${user}` : '!' }</h2> 
  )
}

export default compReact
