import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from './axiosBaseQuery'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getAllProducts: build.query({
        query: () => ({ url: '', method: 'get' }),
      }),
      getProductById: build.query({
        query: (id: string) => ({ url: `/${id}`, method: 'get' }),
      }),
    }
  },
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi
