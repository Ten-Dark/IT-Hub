import { TextInput } from '@/shared/ui/Input';
import * as React from 'react';
import { TagsSelectProps } from '@/entities/Tags/model/types.ts';

export const TagsSelect: React.FC<TagsSelectProps> = ({ tags, onChange }) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onChange([
        ...tags,
        { id: window.crypto.randomUUID(), value: inputValue.trim() },
      ]);
      setInputValue('');
      e.preventDefault();
    }
  };

  const removeTag = (id: string) => {
    onChange(tags.filter((tag) => tag.id !== id));
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
        {tags?.map((tag) => (
          <span
            key={tag.id}
            style={{ background: '#eef', padding: '2px 6px', borderRadius: 4 }}
            onClick={() => removeTag(tag.id)}
          >
            {tag.value}
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
