import styled from 'styled-components';

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  gap: 4px 0;
`;

export const PostContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2px 0;
`;

export const PostTitle = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PostDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
