import * as S from './TextInput.styles.ts';
import * as React from 'react';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  mode?: 'input' | 'textarea';
  size?: number;
  resize?: 'none' | 'auto';
  rows?: number;
}

export const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ label, mode = 'input', size = 16, resize = 'none', rows, ...props }, ref) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      {mode === 'textarea' ? (
        <S.TextArea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          $size={size}
          $resize={resize}
          rows={rows}
        />
      ) : (
        <S.Field
          ref={ref as React.Ref<HTMLInputElement>}
          {...props}
          $size={size}
        />
      )}
    </S.Container>
  );
});
