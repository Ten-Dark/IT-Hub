import * as React from 'react';
import * as S from './PostAddForm.styled.ts';
import * as Yup from 'yup';
import { Field, FieldProps, Formik } from 'formik';
import { useState } from 'react';
import { TextInput } from '@/shared/ui/Input/ui/TextInput.tsx';
import { useAppDispatch } from '@/shared/lib/hooks/redux.ts';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import { UploadImg } from '@/widgets/PostAdd/ui/uploadImg/UploadImg.tsx';
import { createPost } from '@/entities/Post/model/postThunks.ts';
import { Post } from '@/entities/Post/model/types.ts';
import { Tag } from '@/entities/Tags/model/types.ts';

interface Props {
  onClose: () => void;
}

export const PostAddForm: React.FC<Props> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const initialValues: Omit<Post, 'id'> = {
    title: '',
    description: '',
    image: '',
    category: '',
    tags: [] as Tag[],
  };

  const categories = [
    { id: 1, label: 'Инновации и технологии', value: 'Инновации и технологии' },
    { id: 2, label: 'IT-решения', value: 'IT-решения' },
    {
      id: 3,
      label: 'Информационная безопасность',
      value: 'Информационная безопасность',
    },
    { id: 4, label: 'Кейсы', value: 'Кейсы' },
  ];

  const validationSchema = Yup.object({
    image: Yup.string().required('Image'),
    title: Yup.string().required('Title'),
    description: Yup.string().required('Description'),
    category: Yup.string().required('Выберите категорию'),
    tags: Yup.array().min(1, 'Выберите хотя бы один тег'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(
          createPost({
            payload: values,
            file: file || undefined,
          }),
        );
        onClose();
      }}
    >
      {({ values, setFieldValue, errors, touched }) => {
        const handleFileSelect = async (f: File) => {
          setFile(f);
          const url = URL.createObjectURL(f);
          await setFieldValue('image', url);
        };
        return (
          <S.PostAddForm method="dialog">
            <S.PostAddContainer>
              <UploadImg
                preview={values.image || ''}
                onSelect={handleFileSelect}
              />
              {errors.image && (
                <div style={{ color: 'red', fontSize: '12px' }}>
                  {errors.image}
                </div>
              )}

              <S.PostAddBody>
                <Field name="title">
                  {({ field }: FieldProps) => (
                    <>
                      <TextInput
                        placeholder="Заголовок..."
                        size={18}
                        {...field}
                      />
                      {errors.title && touched.title && (
                        <div style={{ color: 'red', fontSize: '12px' }}>
                          {errors.title}
                        </div>
                      )}
                    </>
                  )}
                </Field>

                <Field name="description">
                  {({ field }: FieldProps) => (
                    <>
                      <TextInput
                        placeholder="Описание..."
                        size={16}
                        mode="textarea"
                        {...field}
                      />
                      {errors.description && touched.description && (
                        <div style={{ color: 'red', fontSize: '12px' }}>
                          {errors.description}
                        </div>
                      )}
                    </>
                  )}
                </Field>
              </S.PostAddBody>

              <S.PostAddOptions>
                <CategorySelect
                  options={categories}
                  value={values.category}
                  onChange={(val) => setFieldValue('category', val)}
                />
                {errors.category && touched.category && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.category}
                  </div>
                )}

                <TagsSelect
                  tags={values.tags}
                  onChange={(tags) => setFieldValue('tags', tags)}
                />
                {errors.tags && touched.tags && (
                  <div style={{ color: 'red', fontSize: '12px' }}>
                    {errors.tags}
                  </div>
                )}
              </S.PostAddOptions>
            </S.PostAddContainer>

            <S.PostAddButtons>
              <S.PostAddAcceptButton type="submit">
                Принять
              </S.PostAddAcceptButton>
              <S.PostAddCancelButton type="button" onClick={onClose}>
                Отменить
              </S.PostAddCancelButton>
            </S.PostAddButtons>
          </S.PostAddForm>
        );
      }}
    </Formik>
  );
};
