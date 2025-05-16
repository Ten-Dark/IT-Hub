import * as S from '../styles.ts';
import * as React from 'react';

interface InputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'children'> {
  placeholder?: string;
  label?: string;
  mode?: 'input' | 'textarea';
  size?: number;
}

export const TextInput: React.FC<InputProps> = ({
  label,
  mode = 'input',
  size = 16,
  ...props
}) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      {mode === 'textarea' ? (
        <S.TextArea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          $size={size}
        />
      ) : (
        <S.Field {...props} $size={size} />
      )}
    </S.Container>
  );
};
