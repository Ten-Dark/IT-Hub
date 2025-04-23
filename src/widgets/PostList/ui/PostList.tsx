import { useAppSelector } from '@/shared/lib/hooks/redux.ts';
import * as S from './PostList.styled.ts';
import {
  MdFavoriteBorder,
  MdOutlineBookmarks,
  MdOutlineShare,
} from 'react-icons/md';
import { LiaComments } from 'react-icons/lia';

export const PostList = () => {
  const selector = useAppSelector((state) => state.post);
  return (
    <S.PostContainer>
      {selector.posts.map((post) => (
        <S.PostItem key={post.id}>
          <S.PostBody>
            <S.PostAuthor>
              <img src="https://i.pravatar.cc/150" alt="avatar" />
              <S.PostAuthorInfo>
                <S.PostAuthorName>Author</S.PostAuthorName>
                <S.PostAuthorDate>Date</S.PostAuthorDate>
              </S.PostAuthorInfo>
            </S.PostAuthor>
            <S.PostInfo>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostDescription>{post.description}</S.PostDescription>
            </S.PostInfo>
            <S.PostFeatures>
              <p>Category</p>
              <S.postActions>
                <p>
                  <MdFavoriteBorder size={24} />
                </p>
                <p>
                  <LiaComments size={24} />
                </p>
                <p>
                  <MdOutlineBookmarks size={24} />
                </p>
                <p>
                  <MdOutlineShare size={24} />
                </p>
              </S.postActions>
            </S.PostFeatures>
          </S.PostBody>
          <img src={post.image} alt={post.title} />
        </S.PostItem>
      ))}
    </S.PostContainer>
  );
};
