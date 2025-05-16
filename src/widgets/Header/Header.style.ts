import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  min-width: 80%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  // max-width: 70%
  padding: 10px 130px
`;

export const Li = styled.li<{ $active?: boolean }>`
  cursor: pointer;
  font-weight: bold; // Всегда bold, но визуально контролируем эффект

  opacity: ${(props) => (props.$active ? 1 : 0.6)};
  transform: scale(${(props) => (props.$active ? 1.05 : 1)});
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
`;

export const P = styled.p`
  margin: 0;
`;

export const Logo = styled.h1<{ $active?: boolean }>`
  cursor: pointer;
  font-size: 3rem;
  margin: 12px 0;
  margin-left: 220px;
`;

export const Personal = styled.h2`
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Search = styled.h2<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  width: 300px; // фиксированная ширина, под инпут
  justify-content: flex-end;
  border: ${(props) => (props.$active ? '1px solid gray' : 'none')};
  transition: border 0.2s ease 0.4s;
`;

export const Input = styled.input<{ $active?: boolean }>`
  flex-grow: ${(props) => (props.$active ? 1 : 0)};
  opacity: ${(props) => (props.$active ? 1 : 0)};
  padding: ${(props) => (props.$active ? '5px 10px' : '0')};
  border: ${(props) => (props.$active ? '1px solid #ccc' : 'none')};
  transition: all 0.8s ease;
  overflow: hidden;
  background: white;
  width: ${(props) => (props.$active ? '100%' : '0')};
  pointer-events: ${(props) => (props.$active ? 'auto' : 'none')};
  outline: none;
  border: none; // если хочешь убрать полностью

  &:focus {
    outline: none;
    border: none; // если хочешь убрать полностью
    box-shadow: none; // на случай, если браузер добавляет glow
  }
`;
