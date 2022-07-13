import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'

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
const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
}

// context object
const AppContext = React.createContext()

// context provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch data
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  // remove item functionality
  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  // search form handling
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
    //dispatch
  }

  // effects
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}&query=${state.query}&page=${state.page}`)
  }, [state.query, state.page])

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
