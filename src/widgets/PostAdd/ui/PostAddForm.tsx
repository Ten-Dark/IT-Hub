import * as S from './PostAddForm.styled.ts';
import { TextInput } from '@/shared/ui/Input/ui/TextInput.tsx';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import * as React from 'react';
import { useState } from 'react';
import { Post } from '@/entities/Post/model/types.ts';
import { useAppDispatch } from '@/shared/lib/hooks/redux.ts';
import { createPost } from '@/entities/Post/model/postThunks.ts';
import { Tag } from '@/entities/Tags/model/types.ts';
import { UploadImg } from '@/widgets/PostAdd/ui/uploadImg/UploadImg.tsx';
import { Field, FieldProps, Formik } from 'formik';

interface Props {
  onClose: () => void;
}

export const PostAddForm: React.FC<Props> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
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

  const handleFileSelect = (f: File) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatch(
          createPost({
            payload: { ...values, image: preview },
            file: file || undefined,
          }),
        );
        onClose();
      }}
    >
      {({ values, setFieldValue }) => (
        <S.PostAddForm method="dialog">
          <S.PostAddContainer>
            <UploadImg preview={preview} onSelect={handleFileSelect} />

            <S.PostAddBody>
              <Field name="title">
                {({ field }: FieldProps) => (
                  <TextInput placeholder="Заголовок..." size={18} {...field} />
                )}
              </Field>

              <Field name="description">
                {({ field }: FieldProps) => (
                  <TextInput
                    placeholder="Описание..."
                    size={16}
                    mode="textarea"
                    {...field}
                  />
                )}
              </Field>
            </S.PostAddBody>

            <S.PostAddOptions>
              <CategorySelect
                options={categories}
                value={values.category}
                onChange={(val) => setFieldValue('category', val)}
              />
              <TagsSelect
                tags={values.tags}
                onChange={(tags) => setFieldValue('tags', tags)}
              />
            </S.PostAddOptions>
          </S.PostAddContainer>

          <S.PostAddButtons>
            <S.PostAddAcceptButton type="submit">Принять</S.PostAddAcceptButton>
            <S.PostAddCancelButton type="button" onClick={onClose}>
              Отменить
            </S.PostAddCancelButton>
          </S.PostAddButtons>
        </S.PostAddForm>
      )}
    </Formik>
  );
};
