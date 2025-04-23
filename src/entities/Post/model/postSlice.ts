import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PostState {
  posts: Post[];
  currentPost: Post | null;
}

const initialState: PostState = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      description: 'Description 1',
      image: 'https://placehold.co/180',
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Description 2',
      image: 'https://placehold.co/180',
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'Description 3',
      image: 'https://placehold.co/180',
    },
    {
      id: 4,
      title: 'Post 4',
      description: 'Description 4',
      image: 'https://placehold.co/180',
    },
  ],
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
