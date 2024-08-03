import axios from 'axios'
import queryString from 'query-string'

import { store } from '../state/store'

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com/products',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params) => {
      return queryString.stringify(params, {
        skipEmptyString: true,
        skipNull: true,
      })
    },
  },
  timeout: 15000,
})

axiosClient.interceptors.request.use(async (config) => {
  const token = store.getState().auth.token
  if (token) config.headers.set('Authorization', `Bearer ${token}`)
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    try {
      return response
    } catch (error) {
      return response
    }
  },
  (error) => {
    throw error
  },
)

export default axiosClient
