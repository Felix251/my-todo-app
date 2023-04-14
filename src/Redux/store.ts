import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import { todoApiSlice } from '../services/api/todos'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [todoApiSlice.reducerPath]: todoApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch