import styled from 'styled-components';
import { Form } from 'formik';

export const PostAddForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0 30px;
  max-width: 790px;
  width: 100%;
  height: auto;
`;

export const PostAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
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
  gap: 2px 0;
  width: 100%;
  height: fit-content;
`;

export const PostAddButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px 0;
`;

export const PostAddAcceptButton = styled.button`
  color: #404040;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 128px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #404040;
`;
export const PostAddCancelButton = styled.button`
  background-color: #f87066;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 128px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #f87066;
`;
