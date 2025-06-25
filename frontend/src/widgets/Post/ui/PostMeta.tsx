import React from 'react';
import * as S from './PostMeta.styled.ts';
import { PostAuthor } from '@/widgets/Post/ui/PostAuthor.tsx';

interface PostMetaProps {
  title: string;
  description: string;
}

export const PostMeta: React.FC<PostMetaProps> = ({ title, description }) => {
  return (
    <S.PostInfo>
      <PostAuthor />
      <S.PostContentInfo>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostContentInfo>
    </S.PostInfo>
  );
};
