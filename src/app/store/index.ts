import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User/model/userSlice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Добавьте другие редьюсеры здесь
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
