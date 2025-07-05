import styled from 'styled-components';
import { useState } from 'react';
import { UploadImage } from '@/shared/ui';

const SelectAvatarContainer = styled.div`
  max-width: 1000px;
`;

const CustomSelectorAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const SelectAvatar = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setPreview(URL.createObjectURL(file));
  };

  return (
    <SelectAvatarContainer>
      <UploadImage onSelect={handleFile} preview={preview} />
      <CustomSelectorAvatar />
    </SelectAvatarContainer>
  );
};
