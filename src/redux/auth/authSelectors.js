export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
