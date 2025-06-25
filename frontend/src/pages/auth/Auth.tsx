import React from 'react';
import * as S from './Auth.styled.ts';
import { AuthForm } from '@/features/Auth/ui/AuthForm.tsx';
import { SignInSchema, SignUpSchema } from '@/features/Auth/Auth.types.ts';

export const Auth: React.FC = () => {
  const [click, setClick] = React.useState<boolean>(false);

  return (
    <S.Container>
      {' '}
      <S.MainOverlay $click={click}>
        {' '}
        <S.RightCaption $click={click}>
          <h3>Добро пожаловать!</h3>
          <p>Введите свои персональные данные и начните изучать!</p>
          <S.Sign onClick={() => setClick((value) => !value)}>
            {' '}
            Регистрация{' '}
          </S.Sign>{' '}
        </S.RightCaption>{' '}
        <S.LeftCaption $click={click}>
          <h3>С возвращением!</h3>
          <p>Чтобы продолжить войдите под вашими персональными данными</p>
          <S.Sign onClick={() => setClick((value) => !value)}>
            Войти
          </S.Sign>{' '}
        </S.LeftCaption>{' '}
      </S.MainOverlay>
      <S.LeftOverlay $click={click}>
        {' '}
        <AuthForm
          mode={'signUp'}
          initialValues={{ login: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
          onSubmitLabel={'Регистрация'}
        />{' '}
      </S.LeftOverlay>{' '}
      <S.RightOverlay $click={click}>
        {' '}
        <AuthForm
          mode={'signIn'}
          initialValues={{ login: '', email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmitLabel={'Вход'}
        />{' '}
      </S.RightOverlay>{' '}
    </S.Container>
  );
};
