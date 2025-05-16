import * as S from './PostAddForm.styled.ts';
import { TextInput } from '@/shared/ui/Input/ui/TextInput.tsx';
import { CategorySelect } from '@/widgets/categorySelect/ui/CategorySelect.tsx';
import { TagsSelect } from '@/widgets/tagsSelect/ui/TagsSelect.tsx';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { Post } from '@/entities/Post/model/types.ts';

export const PostAddForm: React.FC = () => {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log(formValues);
  };

  const [selectedCategory, setSelectedCategory] =
    useState<string>('Category 1');

  const [formValues, setFormValues] = useState<Post>({
    id: 1,
    title: '',
    description: '',
    image: '',
    category: selectedCategory,
    tags: [],
  });

  const categories = [
    {
      id: 1,
      label: 'Category 1',
      value: 'Category 1',
    },
    {
      id: 2,
      label: 'Category 2',
      value: 'Category 2',
    },
    {
      id: 3,
      label: 'Category 3',
      value: 'Category 3',
    },
    {
      id: 4,
      label: 'Category 4',
      value: 'Category 4',
    },
  ];

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  return (
    <S.PostAddForm onSubmit={handleSubmit}>
      <S.PostAddContainer>
        <S.PostAddBody>
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
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
          <TagsSelect setFormValues={setFormValues} />
        </S.PostAddOptions>
      </S.PostAddContainer>
      <S.PostAddControls>
        <S.PostAddAcceptButton>Принять</S.PostAddAcceptButton>
        <S.PostAddCancelButton>Отменить</S.PostAddCancelButton>
      </S.PostAddControls>
    </S.PostAddForm>
  );
};
