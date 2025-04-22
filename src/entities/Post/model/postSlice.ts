import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PostState {
  post: Post[];
  currentPost: Post | null;
}

const initialState: PostState = {
  post: [
    {
      id: 1,
      title: 'title',
      description: 'description',
      image: 'https://placehold.co/200x200/png',
    },
    {
      id: 2,
      title: 'title',
      description: 'description',
      image: 'https://placehold.co/200x200/png',
    },
    {
      id: 3,
      title: 'title',
      description: 'description',
      image: 'https://placehold.co/200x200/png',
    },
    {
      id: 4,
      title: 'title',
      description: 'description',
      image: 'https://placehold.co/200x200/png',
    }
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