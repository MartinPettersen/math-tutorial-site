/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit'

import containerReducer from  './Features/container/containerSlice'

export const store = configureStore({
  reducer: {
    container: containerReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch