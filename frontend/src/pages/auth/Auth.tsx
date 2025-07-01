import React, { useCallback } from 'react';
import * as S from './Auth.styled.ts';
import { AuthForm } from '@/features/Auth/ui/AuthForm.tsx';
import {
  AuthFormValues,
  SignInSchema,
  SignUpSchema,
} from '@/features/Auth/Auth.types.ts';
import { registerUser } from '@/features/Auth/api/authApi.ts';
import { Button } from '@/features/Auth/ui/Button.tsx';

export const Auth: React.FC = () => {
  const [click, setClick] = React.useState<boolean>(false);

  const handleSubmit = useCallback(
    async (values: AuthFormValues, { setSubmitting }) => {
      try {
        const res = await registerUser(values);
        console.log('User registered', res);
      } catch (err) {
        err instanceof Error && setSubmitting(false);
      } finally {
        setSubmitting(false);
      }
    },
    [],
  );

  return (
    <S.Container>
      <S.MainOverlay $click={click}>
        <S.RightCaption $click={click}>
          <h3>Добро пожаловать!</h3>
          <p>Введите свои персональные данные и начните изучать!</p>
          <Button
            $variant={'ghost'}
            onClick={() => setClick((value) => !value)}
          >
            Войти
          </Button>
        </S.RightCaption>
        <S.LeftCaption $click={click}>
          <h3>С возвращением!</h3>
          <p>Чтобы продолжить войдите под вашими персональными данными</p>
          <Button
            $variant={'ghost'}
            onClick={() => setClick((value) => !value)}
          >
            Регистрация
          </Button>
        </S.LeftCaption>
      </S.MainOverlay>
      <S.LeftOverlay $click={click}>
        <AuthForm
          mode={'signUp'}
          initialValues={{ login: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        />
      </S.LeftOverlay>
      <S.RightOverlay $click={click}>
        <AuthForm
          mode={'signIn'}
          initialValues={{ login: '', email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        />
      </S.RightOverlay>
    </S.Container>
  );
};
