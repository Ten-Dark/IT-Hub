import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.actionText};
    border: 2px solid ${({ theme }) => theme.colors.background};

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      transform: scale(1.04);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.secondary};
      transform: scale(1.04);
    }
  `,
} as const;

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
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: keyof typeof variantStyles;
  $size?: keyof typeof sizeStyles;
}

export const AuthFormButton = styled.button<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0 0.6rem;
	font-weight: 600;
	border-radius: 8px;
	cursor: pointer;
	user-select: none;
	transition: background-color 0.15s ease-in-out,
	color 0.15s ease-in-out,
	transform 0.15s ease;

	${({$variant}) => variantStyles[$variant || 'primary']}
	${({$size}) => sizeStyles[$size || 'md']}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus-visible {
		outline: 2px solid ${({theme}) => theme.colors.secondary};
		outline-offset: 4px;
	}
`;
