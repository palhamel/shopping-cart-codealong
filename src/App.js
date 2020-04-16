import React from 'react'

// to wrap everything in Store:
import { Provider } from 'react-redux'
// to access 2 reducers we need this from redux-toolkit:
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

// first we create our combined-reducer-file:
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

// then we use this reducer to configure a Store:
const store = configureStore({ reducer })

// and now finally we have a Store we can include in our Provider:
export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
