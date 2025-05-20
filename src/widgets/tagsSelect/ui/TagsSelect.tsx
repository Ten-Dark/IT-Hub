import { TextInput } from '@/shared/ui/Input';
import * as React from 'react';
import { TagsSelectProps } from '@/entities/Tags/model/types.ts';

export const TagsSelect: React.FC<TagsSelectProps> = ({ tags, onChange }) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onChange([...tags, inputValue.trim()]);
      setInputValue('');
      e.preventDefault();
    }
  };

  const removeTag = (idx: number) => {
    onChange(tags.filter((_, id) => id !== idx));
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          marginTop: 8,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            style={{ background: '#eef', padding: '2px 6px', borderRadius: 4 }}
            onClick={() => removeTag(idx)}
          >
            {tag}
          </span>
        ))}
      </div>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={'Придумайте тэги'}
        size={12}
      />
    </>
  );
};
