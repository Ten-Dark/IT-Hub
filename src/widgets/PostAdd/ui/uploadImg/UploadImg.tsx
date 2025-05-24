import React, { ChangeEvent, useRef } from 'react';
import * as S from './UploadImg.styled.ts';

interface UploadImgProps {
  preview: string;
  onSelect: (f: File) => void;
}

export const UploadImg: React.FC<UploadImgProps> = ({ preview, onSelect }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file);
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
          <S.Icon />
          <S.Label>Upload image</S.Label>
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