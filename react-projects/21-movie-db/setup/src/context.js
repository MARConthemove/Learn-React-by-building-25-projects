import React, { useState, useContext } from 'react'
import useFetch from './useFetch'

// access to .env file variable via process.env.
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

// customHook to connect context:
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
