import styled from 'styled-components';

export const Welcome = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Separator = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const Button = styled.button`
	font-size: 1rem;
    font-weight: 600;
	//background-color: transparent;
	//border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
	padding: 0.8rem 2rem;
	border-radius: 8px;
	margin-top: 0.8rem;
`
