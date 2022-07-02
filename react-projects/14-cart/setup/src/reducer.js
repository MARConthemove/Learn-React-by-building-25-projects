// reducer: state (current state before update)
const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === 'DELETE_ITEM') {
    const newItems = state.cart.filter((cartItem) => {
      return cartItem.id !== action.payload
    })
    return { ...state, cart: newItems }
  }

  if (action.type === 'INCREASE_AMOUNT') {
    let newItem = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: newItem }
  }

  if (action.type === 'DECREASE_AMOUNT') {
    let newItem = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: newItem }
  }

  if (action.type === 'GET_TOTALS') {
  }

  // default return of state if no dispatch function is called
  return state
}

export default reducer
