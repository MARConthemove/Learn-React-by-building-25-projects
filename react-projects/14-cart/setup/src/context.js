import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

// default reducer state
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

// appProvider (returns context.provider)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState)

  return (
    <AppContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// customHook: make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
