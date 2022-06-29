import React, { useState, useContext } from 'react'

// first variant:
// useContext + AppContext usage
const AppContext = React.createContext()

// children is needed to display something (the childrens)
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}

// second variant:
// custom hook

export { AppContext, AppProvider }
