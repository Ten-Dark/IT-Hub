import * as S from './PostList.styled.ts';
import {
  MdFavoriteBorder,
  MdOutlineBookmarks,
  MdOutlineShare,
} from 'react-icons/md';
import { LiaComments } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux.ts';
import React, { useEffect } from 'react';
import { fetchPosts } from '@/entities/Post/model/postThunks.ts';

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
        <S.PostItem key={crypto.randomUUID()}>
          <S.PostImage src={post.image} alt={post.title} />
          <S.PostBody>
            <S.PostInfo>
              <S.PostAuthor>
                <img src="https://i.pravatar.cc/150" alt="avatar" />
                <S.PostAuthorInfo>
                  <S.PostAuthorName>Author</S.PostAuthorName>
                  <S.PostAuthorDate>Date</S.PostAuthorDate>
                </S.PostAuthorInfo>
              </S.PostAuthor>

              <S.PostContentInfo>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostDescription>{post.description}</S.PostDescription>
              </S.PostContentInfo>
            </S.PostInfo>
            <S.PostOptions>
              <S.PostTags>
                {post.tags.map((tag) => (
                  <S.PostTag key={tag}>{tag}</S.PostTag>
                ))}
              </S.PostTags>
              <S.PostFeatures>
                <S.PostCategory>{post.category}</S.PostCategory>
                <S.postActions>
                  <MdFavoriteBorder size={24} />
                  <LiaComments size={24} />
                  <MdOutlineBookmarks size={24} />
                  <MdOutlineShare size={24} />
                </S.postActions>
              </S.PostFeatures>
            </S.PostOptions>
          </S.PostBody>
        </S.PostItem>
      ))}
    </S.PostContainer>
  );
};
