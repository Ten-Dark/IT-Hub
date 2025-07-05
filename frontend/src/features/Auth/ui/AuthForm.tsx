import React, { useCallback, useState } from 'react';
import * as yup from 'yup';
import * as S from './AuthForm.style.ts';
import { FormikHelpers } from 'formik';
import { AuthFormValues } from '@/features/Auth/Auth.types.ts';
import { SocialButtons } from '@/features/Auth/ui/SocialButtons.tsx';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NextRegistrationSlide } from '@/features/Auth/ui/NextRegistrationSlide.tsx';
import { AuthFormButton } from '@/features/Auth/ui/AuthFormButton.tsx';
import { AuthFormFields } from '@/features/Auth/ui/AuthFormFields.tsx';

interface AuthFormProps {
  mode: 'signUp' | 'signIn';
  validationSchema: yup.ObjectSchema<object>;
  initialValues: AuthFormValues;
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
  const [step, setStep] = useState<'mainFields' | 'uploadAvatar'>(
    'mainFields',
  );

  const goNext = useCallback(() => setStep('uploadAvatar'), []);
  const goBack = useCallback(() => setStep('mainFields'), []);

  return (
    <S.StyledFormik<AuthFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <S.FormContainer>
          <S.StyledForm>
              <>
                <S.Welcome>
                  {mode === 'signUp' ? 'Создать аккаунт' : 'Авторизация'}
                </S.Welcome>

                <SocialButtons />

                <S.Separator>или</S.Separator>

                <AuthFormFields mode={mode} errors={errors} touched={touched} />

                {mode === 'signUp' ? (
                  <AuthFormButton
                    $variant={'primary'}
                    type={'button'}
                    disabled={isSubmitting}
                    onClick={goNext}
                  >
                    Далее
                    <FaArrowAltCircleRight size={24} />
                  </AuthFormButton>
                ) : (
                  <AuthFormButton
                    $variant={'primary'}
                    type={'submit'}
                    disabled={isSubmitting}
                  >
                    Войти
                  </AuthFormButton>
                )}
                { mode === 'signUp' && <NextRegistrationSlide step={step} onBack={goBack} />}
              </>
          </S.StyledForm>
        </S.FormContainer>
      )}
    </S.StyledFormik>
  );
};
