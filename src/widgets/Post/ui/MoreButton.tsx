import styled from 'styled-components';

const Dot = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  height: 6px;
  width: 6px;
  transition: background-color 0.2s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    height: 6px;
    width: 6px;
    transition: background-color 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: start;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    ${Dot},
    ${Dot}::before,
		${Dot}::after {
      background-color: ${({ theme }) => theme.colors.actionText};
    }
  }
`;

export const MoreButton = () => (
  <Container>
    <Dot />
  </Container>
);
// git commit -m 'feat(post-list): add more-button, improve ui'