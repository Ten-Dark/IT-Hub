import styled from 'styled-components';

export const PostImage = styled.img`
  height: 200px;
  width: 200px;
`;

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  word-break: break-all;

  & img {
    border-radius: 5px;
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 18px;
  gap: 10px 0;
`;

export const PostTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 10px;
  font-weight: bold;
  gap: 0 8px;
  width: 100%;
`;
export const PostTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  color: ${({ theme }) => theme.colors.actionText};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;
