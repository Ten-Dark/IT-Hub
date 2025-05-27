import React, { useState } from 'react';
import { Formik, Field, FieldProps } from 'formik';
import * as S from './PostForm.styled';
import { Post } from '@/entities/Post/model/types';
import { Tag } from '@/entities/Tags/model/types';
import { createPost } from '@/entities/Post/model/postThunks';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import {
  TextInput,
  UploadImage,
  InlineActionToolbar,
  EmojiSelector,
} from '@/shared/ui';
import { useInsertEmoji } from '@/shared/lib/hooks/useInsertEmoji';
import * as Yup from 'yup';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import { GoImage } from 'react-icons/go';
import { RiAiGenerateText } from 'react-icons/ri';

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
  image: Yup.string().required('Image is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Select category'),
  tags: Yup.array().min(1, 'Select at least one tag'),
});

export const PostForm: React.FC<Props> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isActions, setIsActions] = useState<boolean>(false);
  const [actionsPosition, setActionsPosition] = useState<number>(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { insertEmoji, setInputContext } = useInsertEmoji();

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
      {({ values, errors, touched, setFieldValue }) => {
        const handleFileSelect = async (f: File) => {
          setFile(f);
          const url = URL.createObjectURL(f);
          await setFieldValue('image', url);
        };
        return (
          <S.FormWrapper>
            <S.PostAddContainer>
              <UploadImage
                preview={values.image || ''}
                onSelect={(f) => handleFileSelect(f)}
              />
              {errors.image && touched.image && (
                <S.Error>{errors.image}</S.Error>
              )}
              <S.Body>
                <InlineActionToolbar
                  actionsPosition={actionsPosition}
                  isActions={isActions}
                  setIsActions={setIsActions}
                  setShowEmojiPicker={setShowEmojiPicker}
                >
                  {showEmojiPicker && (
                    <EmojiSelector
                      insertEmoji={insertEmoji}
                      setFieldValue={setFieldValue}
                    />
                  )}
                  <GoImage />
                  <RiAiGenerateText />
                </InlineActionToolbar>

                <Field name="title">
                  {({ field }: FieldProps) => (
                    <>
                      <TextInput
                        {...field}
                        placeholder="Title"
                        onFocus={(e) => {
                          setActionsPosition(e.currentTarget.offsetTop);
                          setInputContext(e.currentTarget, 'title');
                        }}
                      />
                      {errors.title && touched.title && (
                        <S.Error>{errors.title}</S.Error>
                      )}
                    </>
                  )}
                </Field>

                <Field name="description">
                  {({ field }: FieldProps) => (
                    <>
                      <TextInput
                        {...field}
                        mode="textarea"
                        placeholder="Description"
                        resize='none'
                        rows={6}
                        onFocus={(e) => {
                          setActionsPosition(e.currentTarget.offsetTop);
                          setInputContext(e.currentTarget, 'description');
                        }}
                      />
                      {errors.description && touched.description && (
                        <S.Error>{errors.description}</S.Error>
                      )}
                    </>
                  )}
                </Field>
              </S.Body>
              <S.Options>
                <CategorySelect
                  options={categories}
                  value={values.category}
                  onChange={(val) => setFieldValue('category', val)}
                />
                {errors.category && touched.category && (
                  <S.Error>{errors.category}</S.Error>
                )}
                <TagsSelect
                  tags={values.tags}
                  onChange={(tags) => setFieldValue('tags', tags)}
                />
                {errors.tags && touched.tags && (
                  <S.Error>{errors.tags}</S.Error>
                )}
              </S.Options>

              <S.Buttons>
                <S.Cancel type="button" onClick={onClose}>
                  Cancel
                </S.Cancel>
                <S.Submit type="submit">Submit</S.Submit>
              </S.Buttons>
            </S.PostAddContainer>
          </S.FormWrapper>
        );
      }}
    </Formik>
  );
};
