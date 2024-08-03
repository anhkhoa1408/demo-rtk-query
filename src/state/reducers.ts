import { Action, combineReducers } from '@reduxjs/toolkit'

import { productApi } from '../api/productApi'
import authSlice from './auth/authSlice'

const appReducer = combineReducers({
  auth: authSlice,
  [productApi.reducerPath]: productApi.reducer,
})

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined = undefined,
  action: Action,
) => {
  if (action.type === 'user/logOut') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
