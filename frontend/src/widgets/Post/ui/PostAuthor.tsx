import * as S from './PostAuthor.styled.ts';
import React from 'react';

export const PostAuthor: React.FC = () => {
  return (
    <S.PostAuthor>
      {' '}
      <img src="https://i.pravatar.cc/150" alt="avatar" />{' '}
      <S.PostAuthorInfo>
        <S.PostAuthorName>Author</S.PostAuthorName>{' '}
        <S.PostAuthorDate>Date</S.PostAuthorDate>{' '}
      </S.PostAuthorInfo>
    </S.PostAuthor>
  );
};
