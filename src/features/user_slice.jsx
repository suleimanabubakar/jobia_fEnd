import { createSlice } from '@reduxjs/toolkit';
import { logout } from './auth_slice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    success: (state, action) => {
      state.user = action.payload
    }
    },
    extraReducers:{
        [logout]:(state)=> {
            state.user = null
        }
  }
});

export const { success } = userSlice.actions;
export default userSlice.reducer;
