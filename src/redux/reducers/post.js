import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const postReducer = createReducer(initialState, {
   PostsRequest: (state) => {
      state.loading = true;
   },
   PostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
   },
   PostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },
   clearErrors: (state) => {
      state.error = null;
   },
});