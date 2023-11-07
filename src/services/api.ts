import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const produtoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = produtoApi

export default produtoApi
