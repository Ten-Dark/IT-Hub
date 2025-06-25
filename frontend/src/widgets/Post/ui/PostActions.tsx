import * as S from './PostActions.styled.ts';
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineBookmarks,
  MdOutlineShare,
} from 'react-icons/md';
import { LiaComments } from 'react-icons/lia';
import React from 'react';
import { toggleLike } from '@/entities/like/model/likeThunk.ts';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux.ts';
import { selectIsLiked } from '@/entities/like/model/selectors.ts';

interface PostActionsProps {
  postId: string;
  category: string;
}

export const PostActions: React.FC<PostActionsProps> = ({
  category,
  postId,
}) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((s) => selectIsLiked(s, postId));

  const onToggle = () => {
    dispatch(toggleLike(postId))
      .unwrap()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.PostFeatures>
      <S.PostCategory>{category}</S.PostCategory>
      <S.postActions>
        {isLiked ? (
          <MdFavorite size={24} onClick={onToggle} />
        ) : (
          <MdFavoriteBorder size={24} onClick={onToggle} />
        )}
        <LiaComments size={24} /> <MdOutlineBookmarks size={24} />
        <MdOutlineShare size={24} />
      </S.postActions>
    </S.PostFeatures>
  );
};
