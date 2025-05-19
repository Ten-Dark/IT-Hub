import * as S from './PostList.styled.ts';
import {
  MdFavoriteBorder,
  MdOutlineBookmarks,
  MdOutlineShare,
} from 'react-icons/md';
import { LiaComments } from 'react-icons/lia';
import { useGetPostsQuery } from '@/entities/Post/api/PostApi.ts';
import { useEffect } from 'react';

export const PostList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  useEffect(() => {
    console.log('ERROR OBJECT:', error);
    if ('status' in (error || {})) {
      // @ts-ignore
      console.error('Error status:', error.status, 'message:', error.error);
    }
  }, [error]);


  if (isLoading) return <div>Loading...</div>;
  return (
    <S.PostContainer>
      {posts?.map((post) => (
        <S.PostItem key={crypto.randomUUID()}>
          <img src={post.image} alt={post.title} />
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
            <S.PostFeatures>
              <S.PostCategory>{post.category}</S.PostCategory>
              <S.postActions>
                <MdFavoriteBorder size={24} />
                <LiaComments size={24} />
                <MdOutlineBookmarks size={24} />
                <MdOutlineShare size={24} />
              </S.postActions>
            </S.PostFeatures>
          </S.PostBody>
        </S.PostItem>
      ))}
    </S.PostContainer>
  );
};
