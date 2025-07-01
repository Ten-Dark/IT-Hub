import React from 'react';
import { SelectAvatar } from '@/features/Auth/ui/SelectAvatar.tsx';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa6';
import { Button } from '@/features/Auth/ui/Button.tsx';

interface Props {
  onBack?: () => void;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.6rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const NextRegistrationSlide: React.FC<Props> = ({ onBack }) => {
  return (
    <>
      <StyledButton type={'button'} onClick={onBack}>
        <FaArrowLeft size={16} />
        Назад
      </StyledButton>
      <SelectAvatar />
      <Button type={'submit'}>Регистрация</Button>
    </>
  );
};
