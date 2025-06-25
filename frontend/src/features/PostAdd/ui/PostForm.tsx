import React, { useState } from 'react';
import { ValidationError } from '@/shared/ui/ValidationError.styled.ts';
import * as S from './PostForm.styled.ts';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Tag } from '@/entities/tags/model/types.ts';
import { Post } from '@/entities/post/model/types.ts';
import { createPost } from '@/entities/post/model/postThunks.ts';
import { useAppDispatch } from '@/shared/lib/hooks/redux.ts';
import { UploadImage } from '@/shared/ui';
import { PostFormFields } from '@/widgets/Post/form/ui/PostFormFields.tsx';
import { PostFormOptions } from '@/widgets/Post/form/ui/PostFormOptions.tsx';
import { PostFormActions } from '@/widgets/Post/form/ui/PostFormActions.tsx';

interface Props {
  onClose: () => void;
}

const initialValues: Omit<Post, 'id' | 'created_at'> = {
  title: '',
  description: '',
  image: '',
  category: '',
  tags: [] as Tag[],
};
const validationSchema = Yup.object({
  image: Yup.string().required('Image is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Select category'),
  tags: Yup.array().min(1, 'Select at least one tag'),
});

export const PostForm: React.FC<Props> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await dispatch(
          createPost({
            payload: values,
            file: file || undefined,
          }),
        ).unwrap();
        onClose();
      }}
    >
      {({ values, errors, touched, setFieldValue }) => {
        const handleFileSelect = async (f: File) => {
          setFile(f);
          const url = URL.createObjectURL(f);
          await setFieldValue('image', url);
          // Использовать карирование
        };
        return (
          <S.FormWrapper>
            <S.PostAddContainer>
              <UploadImage
                preview={values.image || ''}
                onSelect={(f) => handleFileSelect(f)}
              />
              {errors.image && touched.image && (
                <ValidationError>{errors.image}</ValidationError>
              )}
              <PostFormFields
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
              <PostFormOptions
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
              />
              <PostFormActions onClose={onClose} />
            </S.PostAddContainer>
          </S.FormWrapper>
        );
      }}
    </Formik>
  );
};
