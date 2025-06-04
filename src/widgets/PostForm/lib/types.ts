import type {
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from 'formik';
import type { Post } from '@/entities/Post/model/types';

export interface PostFormFormikProps {
  setFieldValue: FormikHelpers<Post>['setFieldValue'];
  errors: FormikErrors<Post>;
  touched: FormikTouched<Post>;
  values: FormikValues;
}

export type PostFormPartialProps = Omit<
  PostFormFormikProps,
  'values' | 'isSubmitting'
>;
