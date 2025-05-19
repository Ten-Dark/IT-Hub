import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User/model/userSlice.ts';
import { postReducer } from '@/entities/Post/model/postSlice.ts';
import { postApi } from '@/entities/Post/api/PostApi.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return defaultMiddleware.concat(postApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
