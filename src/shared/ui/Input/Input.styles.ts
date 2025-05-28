import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-family: montserrat, serif;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  width: 100%;
`;

export const Field = styled.input<{ $fontSize: number }>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  width: 100%;
`;

export const TextArea = styled.textarea<{ $fontSize: number; $resize: string }>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  resize: ${({ $resize }) => $resize};
  width: 100%;
`;
