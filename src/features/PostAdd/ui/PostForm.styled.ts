import styled from 'styled-components';
import { Form } from 'formik';

export const Error = styled.span`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  max-width: 790px;
  width: 100%;
  height: 40%;
  gap: 0 30px;
`;

export const PostAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 16px 0;
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2px 0;
  width: 100%;
  height: fit-content;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 2rem;
  align-self: end;
`;

export const Submit = styled.button`
  color: #404040;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 128px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #404040;
`;

export const Cancel = styled.button`
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
