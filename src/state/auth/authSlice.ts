import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token: string
}

const initialState: AuthState = {
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    clearToken: (state) => {
      state.token = ''
    },
  },
})

export const { saveToken, clearToken } = authSlice.actions

export default authSlice.reducer
