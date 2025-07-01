import styled, { css } from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary' | 'ghost';
  $size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.actionText};
    border: 2px solid ${({ theme }) => theme.colors.background};

    &:hover:not(:disabled) {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};

      scale: 1.04;
    }
  `,
};

const sizeStyles = {
  sm: css`
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  `,
  md: css`
    font-size: 1rem;
    padding: 0.8rem 2rem;
  `,
  lg: css`
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
  `,
};

const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.6rem;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 0.8rem;
  cursor: pointer;
  transition:
    all 0.15s ease-in-out,
    color 0.15s ease-in-out;

  ${({ $variant = 'primary' }) => variantStyles[$variant]}
  ${({ $size = 'md' }) => sizeStyles[$size]}
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<Props> = ({
  $variant = 'primary',
  $size = 'md',
  children,
  ...props
}) => {
  return (
    <StyledButton $variant={$variant} $size={$size} {...props}>
      {children}
    </StyledButton>
  );
};
