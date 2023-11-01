import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

export const selectAuthIsLoggedIn = createSelector(
  selectAuth,
  auth => auth.isLoggedIn
);

export const selectAuthIsLoading = createSelector(
  selectAuth,
  auth => auth.isLoading
);

export const selectAuthError = createSelector(selectAuth, auth => auth.error);

export const selectAuthUserData = createSelector(selectAuth, auth => auth.user);

export const selectAuthIsRefreshing = createSelector(
  selectAuth,
  auth => auth.isRefreshing
);
