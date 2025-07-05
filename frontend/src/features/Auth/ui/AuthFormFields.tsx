import {Field, FieldProps, FormikErrors, FormikTouched} from "formik";
import {Input} from "@/shared/ui";
import {ValidationError} from "@/shared/ui/ValidationError.styled.ts";
import React from "react";
import {AuthFormValues} from "@/features/Auth/Auth.types.ts";

interface AuthFormFields {
    mode: 'signUp' | 'signIn';
    errors: FormikErrors<AuthFormValues>;
    touched: FormikTouched<AuthFormValues>;
}

export const AuthFormFields: React.FC<AuthFormFields> = ({mode, errors, touched}) => {
  return (
    <>
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
    </>
  );
};
