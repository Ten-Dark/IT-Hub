import styled from 'styled-components';

export const SysMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    padding: 40px 0;
`

export const PostContainer = styled.div`
  width: 57rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 40px 0;
`;

export const PostImage = styled.img`
  min-height: 200px;
  height: 100%;
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

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  gap: 4px 0;
`;
export const PostOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 12px 0;
`;

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
export const PostContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2px 0;
`;
export const PostTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const PostDescription = styled.p`
  display: flex;
  align-items: start;
  justify-content: start;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
export const PostTags = styled.div`
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0 8px;
  width: 100%;
`;
export const PostTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  color: ${({ theme }) => theme.colors.background2};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

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
  background-color: ${({ theme }) => theme.colors.background2};
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
