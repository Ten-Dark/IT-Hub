import styled from 'styled-components';

export const PostContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 30px 0;
`;

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & img {
    border-radius: 5px;
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  gap: 15px 0;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 0 15px;

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
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px 0;
`;
export const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const PostDescription = styled.p`
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
export const PostFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const postActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  color: black;
    cursor: pointer;
`;
