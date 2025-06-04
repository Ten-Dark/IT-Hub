import styled from 'styled-components';

export const PostFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.link};
  font-weight: 600;
  font-size: 14px;
`;
export const PostCategory = styled.p`
  background-color: ${({ theme }) => theme.colors.actionText};
  padding: 6px 8px;
  border-radius: 8px;
`;
export const postActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  color: black;

  & svg {
    cursor: pointer;
  }
`;