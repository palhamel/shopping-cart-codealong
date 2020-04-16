import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  // "addItem" - is our ACTION and it has a FUNCTION
  reducers: {
    addItem: (state, action) => {
      // console.log(action)
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct) {
        // increment product +1
        // super simple to do in Redux:
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
        // state.items.push(action.payload)
        // But we can also add a new key via { ...action.payload, quantity: 1 }
      }
    },
    // But we need a REMOVE ACTION:
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        // then completely remove it from cart
        // This line will return a new Array of items, EXCEPT the item that was in the PAYLOAD:
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})
 