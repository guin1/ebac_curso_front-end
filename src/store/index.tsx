import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'

import produtoApi from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [produtoApi.reducerPath]: produtoApi.reducer,
    favorito: favoritoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type RootReducer = ReturnType<typeof store.getState>
