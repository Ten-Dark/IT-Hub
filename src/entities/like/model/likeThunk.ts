import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { PostMethods } from '@/entities/post/api/PostMethods.ts';

export const toggleLike = createAsyncThunk<
  string[],
  string,
  { rejectValue: string }
>('like/toggle', async (postId: string, { getState, rejectWithValue }) => {
  try {
    const state = (getState() as RootState).like;
    const isLiked = state.likeIds.includes(postId);
    const response = isLiked
      ? await PostMethods.likePost(postId, state.likeIds)
      : await PostMethods.unlikePost(postId, state.likeIds);
    return response.likedIds;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Unknown error',
    );
  }
});
