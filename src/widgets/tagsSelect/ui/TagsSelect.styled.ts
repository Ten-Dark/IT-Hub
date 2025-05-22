import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  gap: 6px;
`;

export const TagInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 8px;
  cursor: pointer;
  font-size: 14px;
`;

export const Warning = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 500;
`;
