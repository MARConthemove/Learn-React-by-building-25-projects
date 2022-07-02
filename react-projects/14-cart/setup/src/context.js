import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

// default reducer state
// aka "state"
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
}

// appProvider (returns context.provider)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id })
  }
  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE_AMOUNT', payload: id })
  }
  const decreaseAmount = (id) => {
    dispatch({ type: 'DECREASE_AMOUNT', payload: id })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await fetch(url)
      const cart = await response.json()
      dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    dispatch({ type: 'LOADING' })
    setTimeout(() => {
      fetchData()
    }, 3000)
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        deleteItem,
        increaseAmount,
        decreaseAmount,
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
