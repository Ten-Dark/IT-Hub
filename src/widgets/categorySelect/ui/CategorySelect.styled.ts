import styled from 'styled-components';

export const CategorySelectContainer = styled.div`
  position: relative;
  width: 200px;
`;
export const Display = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Arrow = styled.span`
  width: 0.6em;
  height: 0.6em;
  background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23333" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"/></svg>')
    no-repeat center;
  margin-left: 0.5rem;
  pointer-events: none;
`;

export const Options = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const Item = styled.li<{ 'aria-selected'?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ 'aria-selected': sel }) => (sel ? '#eef' : 'transparent')};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #f0f0f0;
  }
`;
