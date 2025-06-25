import styled from 'styled-components';

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;

  & img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
  }
`;

export const PostAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const PostAuthorName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PostAuthorDate = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;