import { Post } from '@/entities/Post/model/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createPost,
  deleteById,
  fetchPosts,
  updatePost,
} from '@/entities/Post/model/postThunks.ts';

interface PostState {
  posts: Post[];
  currentPost: Post | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    setCurrentPost(state, action: PayloadAction<Post>) {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.isLoading = false;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || 'could not fetch posts.';
      });

    builder
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts.push(payload);
        state.currentPost = payload;
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.error = payload || 'Create failed';
      });
    builder
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        const idx = state.posts.findIndex((p) => p.id === payload.id);
        if (idx !== -1) {
          state.posts[idx] = payload;
        }
        if (state.currentPost && state.currentPost.id === payload.id) {
          state.currentPost = payload;
        }
      })
      .addCase(updatePost.rejected, (state, { payload }) => {
        state.error = payload || 'Update failed';
      });

    builder
      .addCase(deleteById.fulfilled, (state, { payload: deletedId }) => {
        state.posts = state.posts.filter((p) => p.id !== deletedId);
        if (state.currentPost && state.currentPost.id === deletedId) {
          state.currentPost = null
        }
      })
      .addCase(deleteById.rejected, (state, { payload }) => {
        state.error = payload || 'Delete failed';
      });
  },
});

export const { clearError, setCurrentPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
