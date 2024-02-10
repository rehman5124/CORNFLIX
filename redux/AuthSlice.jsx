import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthorised: false
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AddAuthorization: (state) => {
        {localStorage.getItem('guest_session_id') ? state.isAuthorised = true : state.isAuthorised = false}
    }
  }
});

export const {AddAuthorization} = AuthSlice.actions
export const AuthState = (state) => state.auth.isAuthorised
export default AuthSlice.reducer