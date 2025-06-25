import React from 'react';
import styled from 'styled-components';

interface Props {
  onClose: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 2rem;
  align-self: end;
`;

const Submit = styled.button`
  color: #404040;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 128px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #404040;
`;

const Cancel = styled.button`
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

export const PostFormActions: React.FC<Props> = ({ onClose }) => {
  return (
    <Container>
      {' '}
      <Cancel type="button" onClick={onClose}>
        {' '}
        Отменить{' '}
      </Cancel>{' '}
      <Submit type="submit">Submit</Submit>
    </Container>
  );
};
