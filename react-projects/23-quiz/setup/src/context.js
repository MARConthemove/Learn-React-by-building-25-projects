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

  // dataFetch with axios:
  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)

    const response = await axios.get(url).catch((err) => console.log(err))

    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setWaiting(false)
        setError(false)

        console.log('data from fetch: ', data)
      } else {
        setWaiting(true)
        setError(true)
      }
    } else {
      setWaiting(true)
    }
  }

  useEffect(() => {
    fetchQuestions(tempUrl)
  }, [])

  // nextQuestion button functionality
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      } else {
        return index
      }
    })
  }

  const checkAnswer = (value) => {
    console.log('value: ', value)
    if (value) {
      setCorrect((oldSate) => oldSate + 1)
    }

    // regardless of correct or incorrect we want to get the next question
    nextQuestion()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false)
  }

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
        nextQuestion,
        checkAnswer,
        closeModal,
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
