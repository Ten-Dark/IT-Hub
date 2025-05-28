import styled from 'styled-components';
import { Form } from 'formik';

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
