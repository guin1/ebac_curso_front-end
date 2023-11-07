import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  favoritos: Produto[]
}

const initialState: FavoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const meusFavoritos = action.payload

      if (state.favoritos.find((p) => p.id === meusFavoritos.id)) {
        alert('Produto já favoritado')
      } else {
        state.favoritos.push(meusFavoritos)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
