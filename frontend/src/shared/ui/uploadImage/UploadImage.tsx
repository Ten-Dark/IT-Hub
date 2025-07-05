import React, { ChangeEvent, useRef } from 'react';
import * as S from './UploadImage.styled.ts';

interface UploadImgProps {
  preview: string | null;
  onSelect: (f: File) => void | null;
}

export const UploadImage: React.FC<UploadImgProps> = ({
  preview,
  onSelect,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onSelect(file);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <S.Container onClick={openFileDialog}>
      {preview ? (
        <S.Preview src={preview} alt="preview" />
      ) : (
        <>
          <S.Icon /> <S.Label>Upload image</S.Label>
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onFileChange}
      />
    </S.Container>
  );
};
