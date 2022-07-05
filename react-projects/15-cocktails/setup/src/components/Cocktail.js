import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Cocktail = () => {
  const { id } = useParams()

  return (
    <div>
      <h2>cocktail component</h2>
      <h3>{id}</h3>
    </div>
  )
}

export default Cocktail
