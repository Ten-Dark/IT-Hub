import styled from 'styled-components';
import React, { useState } from 'react';
import { Field, FieldProps } from 'formik';
import { RiAiGenerateText } from 'react-icons/ri';
import { GoImage } from 'react-icons/go';
import { useInsertEmoji } from '@/shared/lib/hooks/useInsertEmoji.ts';
import { EmojiSelector, InlineActionToolbar, Input } from '@/shared/ui';
import { ValidationError } from '@/shared/ui/ValidationError.styled.ts';
import { PostFormPartialProps } from '@/widgets/Post/form/types.ts';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const PostFormFields: React.FC<PostFormPartialProps> = ({
  setFieldValue,
  errors,
  touched,
}) => {
  const [actionsPosition, setActionsPosition] = useState<number>(0);
  const [isActions, setIsActions] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const { insertEmoji, setInputContext } = useInsertEmoji();

  return (
    <Container>
      <InlineActionToolbar
        actionsPosition={actionsPosition}
        isActions={isActions}
        setIsActions={setIsActions}
        setShowEmojiPicker={setShowEmojiPicker}
      >
        {showEmojiPicker && (
          <EmojiSelector
            insertEmoji={insertEmoji}
            setFieldValue={setFieldValue}
          />
        )}
        <GoImage />
        <RiAiGenerateText />
      </InlineActionToolbar>

      <Field name="title">
        {({ field }: FieldProps) => (
          <>
            <Input
              {...field}
              placeholder="Title"
              onFocus={(e) => {
                setActionsPosition(e.currentTarget.offsetTop);
                setInputContext(e.currentTarget, 'title');
              }}
            />
            {errors.title && touched.title && (
              <ValidationError>{errors.title}</ValidationError>
            )}
          </>
        )}
      </Field>

      <Field name="description">
        {({ field }: FieldProps) => (
          <>
            <Input
              {...field}
              mode="textarea"
              placeholder="Description"
              resize="none"
              rows={6}
              onFocus={(e) => {
                setActionsPosition(e.currentTarget.offsetTop);
                setInputContext(e.currentTarget, 'description');
              }}
            />
            {errors.description && touched.description && (
              <ValidationError>{errors.description}</ValidationError>
            )}
          </>
        )}
      </Field>
    </Container>
  );
};
