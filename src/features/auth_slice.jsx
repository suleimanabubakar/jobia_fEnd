import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem('jobai_auth_token', action.payload.key);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem('jobai_auth_token');
    },

  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
