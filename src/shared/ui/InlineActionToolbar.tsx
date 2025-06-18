import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { VscSmiley } from 'react-icons/vsc';
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
  setIsActions: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const InlineActionToolbar: React.FC<Props> = ({
  actionsPosition,
  isActions,
  setIsActions,
  setShowEmojiPicker,
  children,
}) => {
  const toggleIsActions = () => setIsActions((prev) => !prev);
  const toggleEmojiPicker = () => setShowEmojiPicker((prev) => !prev);

  return (
    <StyledPostActions $actionsPosition={actionsPosition}>
      <IoIosArrowDown onClick={toggleIsActions} />
      <StyledListActions $isActions={isActions}>
        <VscSmiley onClick={toggleEmojiPicker} />
        {children}
      </StyledListActions>
    </StyledPostActions>
  );
};
