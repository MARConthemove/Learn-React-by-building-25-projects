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
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = amount * price

        // creating values
        cartTotal.amount += amount
        cartTotal.total += itemTotal

        // return cartTotal object
        console.log('typeof cartTotal: ', cartTotal)
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    // rounding an 2 digits after colon
    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }

  // default return of state if no dispatch function is called
  return state
}

export default reducer
