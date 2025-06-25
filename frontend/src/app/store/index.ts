import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user/model/userSlice.ts';
import { postReducer } from '@/entities/post/model/postSlice.ts';
import { likeReducer } from '@/entities/like/model/likeSlice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    like: likeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
