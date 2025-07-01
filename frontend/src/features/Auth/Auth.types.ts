import * as Yup from 'yup';

export interface AuthFormValues {
  login?: string;
  email: string;
  password: string;
}

const baseValidation = {
  email: Yup.string()
    .email('Некорректная почта')
    .required('Это поле обязательно для заполнения'),
  password: Yup.string().required('Это поле обязательно для заполнения'),
};

export const SignUpSchema = Yup.object({
  login: Yup.string().required('Это поле обязательно для заполнения'),
  ...baseValidation,
});

export const SignInSchema = Yup.object(baseValidation);
