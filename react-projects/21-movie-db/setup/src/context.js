import React, { useState, useContext, useEffect } from 'react'

// access to .env file variable via process.env.
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

// customHook to connect context:
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
