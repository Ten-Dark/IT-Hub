import React from 'react';
import * as S from './PostMeta.styled.ts';

interface PostMetaProps {
  title: string;
  description: string;
}

export const PostMeta:React.FC<PostMetaProps> = ({ title, description }) => {
  return (
      <S.PostInfo>
        <S.PostAuthor>
          <img src="https://i.pravatar.cc/150" alt="avatar" />
          <S.PostAuthorInfo>
            <S.PostAuthorName>Author</S.PostAuthorName>
            <S.PostAuthorDate>Date</S.PostAuthorDate>
          </S.PostAuthorInfo>
        </S.PostAuthor>

        <S.PostContentInfo>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostContentInfo>
      </S.PostInfo>
  );
};
