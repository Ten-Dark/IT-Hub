import styled from 'styled-components';
import { Form, Formik } from 'formik';

export const StyledFormik = styled(Formik)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid yellow;
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 8px;
  height: 100%;
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	padding: 2rem 4rem;
	gap: 14px 0;
	width: 400px;
	height: 100%;
`;

export const Welcome = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Separator = styled.p`
  font-weight: 500;
  font-size: 14px;
`;
