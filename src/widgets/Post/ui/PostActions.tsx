import * as S from './PostActions.styled.ts';
import {
  MdFavoriteBorder,
  MdOutlineBookmarks,
  MdOutlineShare,
} from 'react-icons/md';
import { LiaComments } from 'react-icons/lia';
import React from 'react';

interface PostActionsProps {
  category: string;
}

export const PostActions: React.FC<PostActionsProps> = ({ category }) => {
  return (
    <S.PostFeatures>
      <S.PostCategory>{category}</S.PostCategory>
      <S.postActions>
        <MdFavoriteBorder size={24} />
        <LiaComments size={24} />
        <MdOutlineBookmarks size={24} />
        <MdOutlineShare size={24} />
      </S.postActions>
    </S.PostFeatures>
  );
};
