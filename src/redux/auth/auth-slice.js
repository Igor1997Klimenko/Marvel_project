import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./auth-operation";

const initialState = {
  user: { name: null, email:null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authOperations.signUp.fulfilled, 
      (state, {payload}) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(authOperations.signIn.fulfilled, 
      (state, {payload}) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(authOperations.logOut.fulfilled, 
      (state, _, ) => {
        state.user = { name: null, email:null };
        state.token = null;
        state.isLoggedOut = false;
    });
    
  }
})

export default authSlice.reducer;