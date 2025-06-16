import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user/model/userSlice.ts';
import { postReducer } from '@/entities/post/model/postSlice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
