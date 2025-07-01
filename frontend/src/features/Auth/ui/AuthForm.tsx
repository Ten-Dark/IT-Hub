import React, { useCallback, useState } from 'react';
import * as yup from 'yup';
import * as S from './AuthForm.style.ts';
import { Field, FieldProps, FormikHelpers } from 'formik';
import { Input } from '@/shared/ui';
import { ValidationError } from '@/shared/ui/ValidationError.styled.ts';
import { AuthFormValues } from '@/features/Auth/Auth.types.ts';
import { SocialButtons } from '@/features/Auth/ui/SocialButtons.tsx';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NextRegistrationSlide } from '@/features/Auth/ui/NextRegistrationSlide.tsx';
import { Button } from '@/features/Auth/ui/Button.tsx';

interface AuthFormProps {
  mode: 'signUp' | 'signIn';
  validationSchema: yup.ObjectSchema<object>;
  initialValues: AuthFormValues;
  onSubmitLabel: string;
  onSubmit: (
    values: AuthFormValues,
    helpers: FormikHelpers<AuthFormValues>,
  ) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  validationSchema,
  initialValues,
  onSubmit,
}) => {
  const [step, setStep] = useState<'mainFieldFields' | 'uploadAvatar'>(
    'mainFieldFields',
  );

  const goNext = useCallback(() => setStep('uploadAvatar'), []);
  const goBack = useCallback(() => setStep('mainFieldFields'), []);

  return (
    <S.StyledFormik<AuthFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <S.FormContainer>
          <S.StyledForm>
            {step === 'mainFieldFields' ? (
              <>
                <S.Welcome>
                  {mode === 'signUp' ? 'Создать аккаунт' : 'Авторизация'}
                </S.Welcome>
                <SocialButtons />
                <S.Separator>или</S.Separator>
                {mode === 'signUp' && (
                  <Field name={'login'}>
                    {({ field }: FieldProps) => (
                      <>
                        <Input {...field} placeholder={'Логин'} />
                        {errors.login && touched.login && (
                          <ValidationError>{errors.login}</ValidationError>
                        )}
                      </>
                    )}
                  </Field>
                )}
                <Field name={'email'}>
                  {({ field }: FieldProps) => (
                    <>
                      <Input
                        {...field}
                        mode={'input'}
                        placeholder={'example@example.com'}
                      />
                      {errors.email && touched.email && (
                        <ValidationError>{errors.email}</ValidationError>
                      )}
                    </>
                  )}
                </Field>
                <Field name={'password'}>
                  {({ field }: FieldProps) => (
                    <>
                      <Input {...field} type="password" placeholder="Пароль" />
                      {errors.password && touched.password && (
                        <ValidationError>{errors.password}</ValidationError>
                      )}
                    </>
                  )}
                </Field>

                {mode === 'signUp' ? (
                  <Button
                    $variant={'primary'}
                    type={'button'}
                    disabled={isSubmitting}
                    onClick={goNext}
                  >
                    Далее
                    <FaArrowAltCircleRight size={24} />
                  </Button>
                ) : (
                  <Button
                    $variant={'primary'}
                    type={'submit'}
                    disabled={isSubmitting}
                  >
                    Войти
                  </Button>
                )}
              </>
            ) : (
              <NextRegistrationSlide onBack={goBack} />
            )}
          </S.StyledForm>
        </S.FormContainer>
      )}
    </S.StyledFormik>
  );
};
