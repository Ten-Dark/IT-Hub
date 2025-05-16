import styled from 'styled-components';

export const PostAddForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0 30px;
  max-width: 790px;
  width: 100%;
`;

export const PostAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px 0;
`;

export const PostAddBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px 0;
  width: 100%;
`;

export const PostAddOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px 0;
  width: 100%;
`;

export const PostAddControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px 0;
`;

export const PostAddAcceptButton = styled.button`
  border: 2px solid #404040;
  color: #404040;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 128px;
  width: 100%;
  cursor: pointer;
`;
export const PostAddCancelButton = styled.button`
  border: 1px solid #f87066;
  background-color: #f87066;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 128px;
  width: 100%;
  cursor: pointer;
`;
