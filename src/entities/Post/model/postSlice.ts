import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '@/entities/Post/model/types.ts';
import { postApi } from '@/entities/Post/api/PostApi.ts';

const initialState: PostState = {
  posts: [],
  currentPost: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
      state.currentPost = action.payload;
    },
    setPost: (state, action: PayloadAction<Post>) => {
      state.currentPost = action.payload;
    },
    clearPost(state) {
      state.currentPost = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postApi.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        state.posts = payload;
      },
    );
  },
});

export const { addPost, clearPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
