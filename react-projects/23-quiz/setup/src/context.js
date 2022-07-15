import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}
// showcase url:
/* https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple */

// New api endpoint, maybe needed to be changed later
const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
