import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface PostState {
  currentPost: Post | null;
}

const initialState: PostState = {
  currentPost: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Post>) {
      state.currentPost = action.payload;
    },
    clearPost(state) {
      state.currentPost = null;
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;
export const postReducer = postSlice.reducer;