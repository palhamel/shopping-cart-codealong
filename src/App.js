import React from 'react'

// to wrap everything in Store:
import { Provider } from 'react-redux'
// to access 2 reducers we need:
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

// we create our combined-reducer-file:
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

export const App = () => (
  <Provider store={}>
    <Cart />
    <Products />
  </Provider>
)
