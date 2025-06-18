import React from 'react';
import styled from 'styled-components';
import { POST_CATEGORIES } from '@/shared/constants/categories.ts';
import { ValidationError } from '@/shared/ui/ValidationError.styled.ts';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import { PostFormFormikProps } from '@/widgets/Post/PostForm/lib/types.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2px 0;
  width: 100%;
  height: fit-content;
`;

export const PostFormOptions: React.FC<PostFormFormikProps> = ({
  setFieldValue,
  values,
  errors,
  touched,
}) => {
  return (
    <Container>
      <CategorySelect
        options={POST_CATEGORIES}
        value={values.category}
        onChange={(val) => setFieldValue('category', val)}
      />
      {errors.category && touched.category && (
        <ValidationError>{errors.category}</ValidationError>
      )}
      <TagsSelect
        tags={values.tags}
        onChange={(tags) => setFieldValue('tags', tags)}
      />
      {errors.tags && touched.tags && (
        <ValidationError>{errors.tags}</ValidationError>
      )}
    </Container>
  );
};
