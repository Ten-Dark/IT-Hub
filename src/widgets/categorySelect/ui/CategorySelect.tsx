import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as S from './CategorySelect.styled.ts';
import { CategorySelectProps } from '@/entities/Category/model/types.ts';

export const CategorySelect: React.FC<CategorySelectProps> = ({
  options = [],
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  return (
    <S.CategorySelectContainer
      $isOpen={isOpen}
      ref={wrapperRef}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls="dropdown-list"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setIsOpen((option) => !option);
        if (e.key === 'Escape') setIsOpen(false);
      }}
    >
      <S.Display onClick={() => setIsOpen((option) => !option)}>
        {selectedLabel || 'Выберите категорию'} <S.Arrow />
        {isOpen && options.length > 0 && (
          <S.Options role="listbox" id="dropdown-list" $isOpen={isOpen}>
            {options.map((option, idx) => (
              <S.Item
                key={idx}
                role="option"
                aria-selected={option.value === value}
                tabIndex={0}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onChange(option.value);
                    setIsOpen(false);
                  }
                }}
              >
                {option.label}
              </S.Item>
            ))}
          </S.Options>
        )}
      </S.Display>
    </S.CategorySelectContainer>
  );
};
