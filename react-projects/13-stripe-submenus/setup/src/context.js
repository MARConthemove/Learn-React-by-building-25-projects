import React, { useState, useContext } from 'react'
import sublinks from './data'

// contextAPI =>
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='hello world'>{children}</AppContext.Provider>
  )
}

// custom hook =>
export const useGlobalContext = () => {
  return useContext(AppContext)
}
