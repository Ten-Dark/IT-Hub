import React from 'react';
import * as yup from 'yup';
import * as S from './AuthForm.style.ts';
import { Field, FieldProps, Form, Formik } from 'formik';
import { Input } from '@/shared/ui';
import { ValidationError } from '@/shared/ui/ValidationError.styled.ts';
import { AuthFormValues } from '@/features/Auth/Auth.types.ts';
import { SocialButtons } from '@/features/Auth/ui/SocialButtons.tsx';

interface AuthFormProps {
  mode: 'signUp' | 'signIn';
  validationSchema: yup.ObjectSchema<object>;
  initialValues: AuthFormValues;
  onSubmitLabel: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  validationSchema,
  initialValues,
  onSubmitLabel,
}) => {
  return (
    <Formik<AuthFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <S.Welcome>
            {mode === 'signUp' ? 'Create Account' : 'Sign in'}
          </S.Welcome>
          <SocialButtons />

          <S.Separator>
            or use your{' '}
            {mode === 'signUp' ? 'email for registration' : 'account'}
          </S.Separator>

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
                {errors.email && touched.email && (
                  <ValidationError>{errors.email}</ValidationError>
                )}
              </>
            )}
          </Field>

          <S.Button type={'submit'} disabled={isSubmitting}>
            {onSubmitLabel}
          </S.Button>
        </Form>
      )}
    </Formik>
  );
};
