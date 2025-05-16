import { TextInput } from '@/shared/ui/Input';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Post } from '@/entities/Post/model/types.ts';

interface TagsSelectProps {
  setFormValues: Dispatch<SetStateAction<Post>>;
}

export const TagsSelect: React.FC<TagsSelectProps> = ({ setFormValues }) => {
  return (
    <>
      <TextInput
        onChange={(e) =>
          setFormValues((value) => ({
            ...value,
            tags: e.target.value,
          }))
        }
        placeholder={'Придумайте тэги'}
        size={12}
      />
    </>
  );
};
