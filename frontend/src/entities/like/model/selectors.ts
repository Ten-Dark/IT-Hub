import { RootState } from '@/app/store';

export const selectLikeIds = (state: RootState) => state.like.likeIds;

export const selectIsLiked = (state: RootState, postId: string) =>
  state.like.likeIds.includes(postId);

export const selectLikeLoading = (state: RootState) => state.like.isLoading;
