import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { VscSmiley } from 'react-icons/vsc';
import { EmojiSelector } from '@/shared/ui/EmojiSelector.tsx';
import { GoImage } from 'react-icons/go';
import { RiAiGenerateText } from 'react-icons/ri';
import { useInsertEmoji } from '@/shared/lib/hooks/useInsertEmoji.ts';
import { FormikHelpers } from 'formik';
import { Post } from '@/entities/Post/model/types.ts';
import * as React from 'react';
import { ReactNode } from 'react';

const StyledPostActions = styled.div<{ $actionsPosition: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  left: -10%;
  top: ${({ $actionsPosition }) => `${$actionsPosition}px`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.actionText};
  border-radius: 16px;
  transition: all 0.2s ease-in-out;

  & svg {
    padding: 0.4rem;
    font-size: 2.2rem;
    border-radius: 100%;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.link};
      color: ${({ theme }) => theme.colors.actionText};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const StyledListActions = styled.div<{ $isActions: boolean }>`
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: ${({ $isActions }) => ($isActions ? '100px' : '0')};
  visibility: ${({ $isActions }) => ($isActions ? 'visible' : 'hidden')};
  margin-top: ${({ $isActions }) => ($isActions ? '6px' : '0')};
  transition: all 0.2s ease-in-out;
`;

interface Props {
  actionsPosition: number;
  isActions: boolean;
  setIsActions: (isActions: boolean) => void;
  setShowEmojiPicker: (showEmojiPicker: boolean) => void;
  children: ReactNode;
}

export const InlineActionToolbar: React.FC<Props> = ({
  actionsPosition,
  isActions,
  setIsActions,
  setShowEmojiPicker,
  children,
}) => {
  return (
    <StyledPostActions $actionsPosition={actionsPosition}>
      <IoIosArrowDown onClick={() => setIsActions((val) => !val)} />
      <StyledListActions $isActions={isActions}>
        <VscSmiley onClick={() => setShowEmojiPicker((val) => !val)} />
        {children}
      </StyledListActions>
    </StyledPostActions>
  );
};
