import { TextInput } from '@/shared/ui/Input';
import * as React from 'react';
import { TagsSelectProps } from '@/entities/Tags/model/types.ts';
import { useState } from 'react';
import * as S from './TagsSelect.styled.ts';

export const TagsSelect: React.FC<TagsSelectProps> = ({ tags, onChange }) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [warning, setWarning] = useState('');

  const showWarning = (message: string) => {
    setWarning(message);
    setTimeout(() => setWarning(''), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newTag = inputValue.trim();
      e.preventDefault();
      if (tags.length > 6) showWarning('Вы можете добавить не больше 6 тэгов');
      else {
        if (tags.includes(newTag)) {
          showWarning('Нельзя дублировать тэги');
        } else {
          onChange([...tags, inputValue.trim()]);
          setInputValue('');
        }
      }
    }
  };

  const removeTag = (idx: number) => {
    onChange(tags.filter((_, id) => id !== idx));
  };
  return (
    <S.Container>
      <S.TagInput>
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            style={{
              background: '#eef',
              padding: '2px 6px',
              borderRadius: 4,
            }}
            onClick={() => removeTag(idx)}
          >
            {tag}
          </span>
        ))}
      </S.TagInput>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={'Придумайте тэги'}
        size={12}
      />
      {warning && <S.Warning>{warning}</S.Warning>}
    </S.Container>
  );
};
