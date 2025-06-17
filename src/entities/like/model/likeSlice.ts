import { createSlice } from '@reduxjs/toolkit';
import { toggleLike } from '@/entities/like/model/likeThunk.ts';

export interface LikeState {
  likeIds: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LikeState = {
  likeIds: [],
  isLoading: false,
  error: null,
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleLike.pending, (state, action) => {
      const id = action.meta.arg
      if (state.likeIds.includes(id)) {
        state.likeIds = state.likeIds.filter(x => x !== id);
      } else {
        state.likeIds.push(id);
      }
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(toggleLike.fulfilled, (state, action) => {
      state.isLoading = false;
      // если API вернул полный массив:
      if (Array.isArray(action.payload)) {
        state.likeIds = action.payload;
      }
      // иначе—не трогаем, потому что pending уже сделал локальный toggle
    });
    builder.addCase(toggleLike.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? action.error.message ?? 'Unknown error';
    });
  },
});

export const likeReducer = likeSlice.reducer;
