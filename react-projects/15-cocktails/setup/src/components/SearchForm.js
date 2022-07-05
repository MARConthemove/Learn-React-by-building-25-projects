import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  return (
    <div className='search'>
      <form className='search-form form-control'>
        <label>Cocktail:</label>
        <input type='text' />
      </form>
    </div>
  )
}

export default SearchForm
