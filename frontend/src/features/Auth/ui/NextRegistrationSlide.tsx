import React from 'react';
import styled from 'styled-components';
import { SelectAvatar } from '@/features/Auth/ui/SelectAvatar.tsx';
import { FaArrowLeft } from 'react-icons/fa6';
import { AuthFormButton } from '@/features/Auth/ui/AuthFormButton.tsx';

interface Props {
  onBack?: () => void;
  step?: 'mainFields' | 'uploadAvatar';
}

const BackButton = styled(AuthFormButton).attrs({
  $variant: 'ghost',
  type: 'button',
})`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const Container = styled.div<{$step?: Props['step']}>`
	position: absolute;
    top: 0;
	left: ${({$step}) => $step === 'mainFields' ? '100%' : '0%'};
    visibility: ${({$step}) => $step === 'mainFields' ? 'hidden' : 'visible'};
    background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	gap: 3rem 0;
    transition: all .5s ease-in-out;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0;
`;

export const NextRegistrationSlide: React.FC<Props> = ({ onBack, step }) => {
  return (
    <Container $step={step}>
      <BackButton $variant={'ghost'} onClick={onBack}>
        <FaArrowLeft size={16} />
        Назад
      </BackButton>
      <SelectAvatar />
      <Actions>
        <AuthFormButton type={'submit'}>Регистрация</AuthFormButton>
        <AuthFormButton $variant={'ghost'} $size={'sm'}>
          Пропустить
        </AuthFormButton>
      </Actions>
    </Container>
  );
};
