import * as S from './PostAddForm.styled.ts';
import { TextInput } from '@/shared/ui/Input/ui/TextInput.tsx';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { Post } from '@/entities/Post/model/types.ts';
import { Tag } from '@/entities/Tags/model/types.ts';
import { useAppDispatch } from '@/shared/lib/hooks/redux.ts';
import { addPost } from '@/entities/Post/model/postSlice.ts';
import { store } from '@/app/store';

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

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(addPost({ ...formValues }));
    console.log('Now in store:', store.getState().posts.posts);
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
        <S.PostAddAcceptButton>Принять</S.PostAddAcceptButton>
        <S.PostAddCancelButton>Отменить</S.PostAddCancelButton>
      </S.PostAddControls>
    </S.PostAddForm>
  );
};
