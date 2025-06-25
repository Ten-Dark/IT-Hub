import * as S from './Input.styles.ts';
import * as React from 'react';
import { forwardRef } from 'react';
import {
  BaseProps,
  InputProps,
  isTextareaMode,
} from '@/shared/ui/Input/Input.types.ts';

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  const { label, fontSize = 16, ...rest } = props;
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}{' '}
      {isTextareaMode(props)
        ? (() => {
            const {
              resize = 'none',
              rows,
              ...textareaRest
            } = rest as Omit<
              React.TextareaHTMLAttributes<HTMLTextAreaElement>,
              keyof BaseProps
            > & { resize?: 'none' | 'auto'; rows?: number };
            return (
              <S.TextArea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                $fontSize={fontSize}
                $resize={resize}
                rows={rows}
                {...textareaRest}
              />
            );
          })()
        : (() => {
            const inputRest = rest as Omit<
              React.InputHTMLAttributes<HTMLInputElement>,
              keyof BaseProps
            >;
            return (
              <S.Field
                ref={ref as React.Ref<HTMLInputElement>}
                $fontSize={fontSize}
                {...inputRest}
              />
            );
          })()}
    </S.Container>
  );
});
