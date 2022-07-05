import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Cocktail = () => {
  const { cocktailId } = useParams()
  console.log(useParams())
  return (
    <div>
      <h2>cocktail component</h2>
      <h3>{cocktailId}</h3>
    </div>
  )
}

export default Cocktail
