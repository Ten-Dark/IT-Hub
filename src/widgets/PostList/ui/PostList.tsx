import { useAppSelector } from '@/shared/lib/hooks/redux.ts';
import * as S from './PostList.styled.ts';
import {
  MdFavoriteBorder,
  MdOutlineBookmarks,
  MdOutlineShare,
} from 'react-icons/md';
import { LiaComments } from 'react-icons/lia';

export const PostList = () => {
  const selector = useAppSelector((state) => state.posts);
  return (
    <S.PostContainer>
      {selector.posts.map((post) => (
        <S.PostItem key={post.id}>
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
              <S.PostCategory>Category</S.PostCategory>
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
