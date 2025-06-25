import React from 'react';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import styled from 'styled-components';
import { FormikHelpers } from 'formik';
import { Post } from '@/entities/post/model/types.ts';

interface Props {
  insertEmoji: (
    emoji: string,
    setFieldValue: FormikHelpers<Post>['setFieldValue'],
  ) => void;
  setFieldValue: FormikHelpers<Post>['setFieldValue'];
}

const StyledEmojiSelector = styled.div`
  position: absolute;
  right: -2.4rem;
  top: 2rem;
  z-index: 1000;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const EmojiSelector: React.FC<Props> = ({
  insertEmoji,
  setFieldValue,
}) => {
  return (
    <StyledEmojiSelector>
      <EmojiPicker
        onEmojiClick={(emojiData: EmojiClickData) =>
          insertEmoji(emojiData.emoji, setFieldValue)
        }
        theme={Theme.DARK}
      />
    </StyledEmojiSelector>
  );
};
