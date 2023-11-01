import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, signUp } from './auth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const getActions = type =>
  isAnyOf(signUp[type], login[type], logOut[type], refreshUser[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(getActions('pending'), state => {
        state.isRefreshing = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isRefreshing = false;
        state.error = true;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isRefreshing = false;
        state.error = null;
      });
  },
});
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
