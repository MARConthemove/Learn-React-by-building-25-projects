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
  // state:
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [questions, setQuestions] = useState([])
  const [correct, setCorrect] = useState(0)
  // if api cant generate the question
  const [error, setError] = useState(false)
  // question number: (page)
  const [index, setIndex] = useState(0)
  // for displaying form or question page:
  const [waiting, setWaiting] = useState(true)

  // functionality:
  const fetchQuestion = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      console.log('response:', response)
      const data = await response.json()
      console.log('data:', data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        isModalOpen,
        questions,
        correct,
        error,
        index,
        waiting,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
