import * as S from './PostAddForm.styled.ts';
import { TextInput } from '@/shared/ui/Input/ui/TextInput.tsx';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { Post } from '@/entities/Post/model/types.ts';
import { Tag } from '@/entities/Tags/model/types.ts';
import { useAppDispatch } from '@/shared/lib/hooks/redux.ts';
import { createPost } from '@/entities/Post/model/postThunks.ts';

interface Props {
  onClose: () => void;
}

export const PostAddForm: React.FC<Props> = ({ onClose }) => {
  const [formValues, setFormValues] = useState<Omit<Post, 'id'>>({
    title: '',
    description: '',
    image: 'https://placehold.co/180x180/png',
    category: '',
    tags: [] as Tag[],
  });
  const dispatch = useAppDispatch();

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

  const handleCategoryChange = (newCategory: string) => {
    setFormValues((vals) => ({ ...vals, category: newCategory }));
  };

  const handleTagsChange = (tagValue: Tag[]) => {
    setFormValues((vals) => ({ ...vals, tags: tagValue }));
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    dispatch(createPost(formValues));
    onClose();
  };

  return (
    <S.PostAddForm onSubmit={handleSubmit} method="dialog">
      <S.PostAddContainer>
        <S.PostAddBody>
          <TextInput
            placeholder="Изображение..."
            size={16}
            type={'url'}
            disabled={true}
            onChange={(e) =>
              setFormValues((value) => ({
                ...value,
                image: e.target.value,
              }))
            }
          />
          <TextInput
            placeholder="Заголовок..."
            size={18}
            onChange={(e) =>
              setFormValues((value) => ({
                ...value,
                title: e.target.value,
              }))
            }
          />
          <TextInput
            placeholder="Описание..."
            size={16}
            mode={'textarea'}
            onChange={(e) =>
              setFormValues((value) => ({
                ...value,
                description: e.target.value,
              }))
            }
          />
        </S.PostAddBody>
        <S.PostAddOptions>
          <CategorySelect
            options={categories}
            value={formValues.category}
            onChange={handleCategoryChange}
          />
          <TagsSelect tags={formValues.tags} onChange={handleTagsChange} />
        </S.PostAddOptions>
      </S.PostAddContainer>
      <S.PostAddControls>
        <S.PostAddAcceptButton type={'submit'}>Принять</S.PostAddAcceptButton>
        <S.PostAddCancelButton type={'button'} onClick={onClose}>
          Отменить
        </S.PostAddCancelButton>
      </S.PostAddControls>
    </S.PostAddForm>
  );
};
