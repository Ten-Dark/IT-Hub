import React from 'react';

export interface BaseProps {
  fontSize?: number;
  label?: string;
}

interface InputModeProps
  extends BaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  mode?: 'input';
}

interface TextAreaModeProps
  extends BaseProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode: 'textarea';
  resize?: 'none' | 'auto';
  rows?: number;
}

export type InputProps = InputModeProps | TextAreaModeProps;

export const isTextareaMode = (
  props: InputProps,
): props is TextAreaModeProps => {
  return props.mode === 'textarea';
};
