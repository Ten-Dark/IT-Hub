import styled from 'styled-components';
import { FaImage } from 'react-icons/fa';

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.link};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Preview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Icon = styled(FaImage)`
  font-size: 64px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
