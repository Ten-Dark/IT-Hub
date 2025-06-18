import * as S from './PostList.styled.ts';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux.ts';
import React, { useEffect } from 'react';
import { fetchPosts } from '@/entities/post/model/postThunks.ts';
import { PostCard } from '@/widgets/Post/ui/PostCard.tsx';

export const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <S.PostContainer>
      {isLoading && <S.SysMessage>Loading...</S.SysMessage>}
      {error && <S.SysMessage>{error}</S.SysMessage>}

      {posts?.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
          category={post.category}
          tags={post.tags}
        />
      ))}
    </S.PostContainer>
  );
};
