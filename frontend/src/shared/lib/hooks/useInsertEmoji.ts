import { useRef } from 'react';

export const useInsertEmoji = () => {
  const lastInputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null,
  );
  const lastFieldNameRef = useRef<string>('');

  const setInputContext = (
    input: HTMLInputElement | HTMLTextAreaElement | null,
    fieldName: string,
  ) => {
    if (input) {
      lastInputRef.current = input;
      lastFieldNameRef.current = fieldName;
    }
  };

  const insertEmoji = (
    emoji: string,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const input = lastInputRef.current;
    const fieldName = lastFieldNameRef.current;

    if (!input || !fieldName) return;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const currentValue = input.value;

    const newValue =
      currentValue.slice(0, start) + emoji + currentValue.slice(end);
    setFieldValue(fieldName, newValue);

    // Восстановление позиции курсора
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + emoji.length, start + emoji.length);
    });

    // Принудительно инициируем обновление (для Formik и React)
    const event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
  };

  return {
    setInputContext,
    insertEmoji,
  };
};
