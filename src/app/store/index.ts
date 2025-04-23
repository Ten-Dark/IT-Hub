import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from '@/entities/Post/model/postSlice.ts';

export const store = configureStore({
  reducer: {
    post: postReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
