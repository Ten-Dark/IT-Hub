import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 0 15px;
  max-width: 76rem;
  width: 100%;
`;

export const PostAddDialog = styled.dialog`
  display: block;
  visibility: hidden;
  opacity: 0;
  min-height: max-content;

  &[open] {
    transition: all 0.2s ease-in-out;
    visibility: visible;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    width: 44.44%;
    margin: auto;
    min-height: max-content;
  }

  transition: all 0.2s linear;
  border: none;
  padding: 50px 100px;
  border-radius: 6px;

  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;
