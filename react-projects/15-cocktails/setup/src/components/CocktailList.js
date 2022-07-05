import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  console.log('cocktails:', cocktails)
  // conditional rendering
  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }

  return <Cocktail />
}

export default CocktailList
