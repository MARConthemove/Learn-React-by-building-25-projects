import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

// reducer function
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
// &query=...
// &page=...

// reducer initialState
const initialState = { isLoading: true }

// context object
const AppContext = React.createContext()

// context provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch data
  const fetchStories = async () => {
    dispatch({ type: SET_LOADING })
  }

  // effects
  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
