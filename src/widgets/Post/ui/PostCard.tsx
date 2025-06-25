import { useAppDispatch } from '@/shared/lib/hooks/redux.ts';
import React, { useEffect } from 'react';
import { fetchPosts } from '@/entities/Post/model/postThunks.ts';
import * as S from './PostCard.styled.ts';
import { PostMeta } from '@/widgets/Post/ui/PostMeta.tsx';
import { Flex } from '@/shared/ui/Flex.tsx';
import { PostActions } from '@/widgets/Post/ui/PostActions.tsx';
import { MoreButton } from '@/widgets/Post/ui/MoreButton.tsx';

interface PostCardProps {
  image: string | undefined;
  title: string;
  description: string;
  tags: string[];
  category: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  description,
  category,
  tags,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <S.PostItem>
      <S.PostImage src={image} alt={title} />
      <S.PostBody>
        <PostMeta title={title} description={description} />
        <Flex direction="column" $justify="start" $align="start" $gap="8px 0">
          <S.PostTags>
            {tags.map((tag) => (
              <S.PostTag key={tag}>{tag}</S.PostTag>
            ))}
          </S.PostTags>
          <PostActions category={category} />
        </Flex>
      </S.PostBody>
      <MoreButton />
    </S.PostItem>
  );
};
