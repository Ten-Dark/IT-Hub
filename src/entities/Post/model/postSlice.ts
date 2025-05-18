import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '@/entities/Post/model/types.ts';

const initialState: PostState = {
  posts: [
    {
      title: 'title',
      description:
        "Lorizzle i'm in the shizzle dolizzle sit fizzle, consectetuer adipiscing elit. Nullizzle shizzlin dizzle velizzle, yo volutpizzle, things quizzle, dope vizzle, arcu. Pellentesque owned the bizzle...",
      image: 'https://placehold.co/180x180/png',
      category: 'Инновации и технологии',
      tags: [],
    },
    {
      title: 'title',
      description:
        "Lorizzle i'm in the shizzle dolizzle sit fizzle, consectetuer adipiscing elit. Nullizzle shizzlin dizzle velizzle, yo volutpizzle, things quizzle, dope vizzle, arcu. Pellentesque owned the bizzle...",
      image: 'https://placehold.co/180x180/png',
      category: 'IT-решения',
      tags: [],
    },
    {
      title: 'title',
      description:
        "Lorizzle i'm in the shizzle dolizzle sit fizzle, consectetuer adipiscing elit. Nullizzle shizzlin dizzle velizzle, yo volutpizzle, things quizzle, dope vizzle, arcu. Pellentesque owned the bizzle...",
      image: 'https://placehold.co/180x180/png',
      category: 'Инновации и технологии',
      tags: [],
    },
    {
      title: 'title',
      description:
        "Lorizzle i'm in the shizzle dolizzle sit fizzle, consectetuer adipiscing elit. Nullizzle shizzlin dizzle velizzle, yo volutpizzle, things quizzle, dope vizzle, arcu. Pellentesque owned the bizzle...",
      image: 'https://placehold.co/180x180/png',
      category: 'Кейсы',
      tags: [],
    },
  ],
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
});

export const { addPost, clearPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
