import styled from 'styled-components';

export const OverlaySidesGlobal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-width: 50%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  padding: 4rem;
`;

export const CaptionGlobal = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 10;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 8rem 2rem 0 2rem;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 800px;
  height: 550px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-family: monospace;
  z-index: 1;
`;

export const MainOverlay = styled.div<{ $click: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  transition: all 0.5s ease-in-out;
  transform: ${({ $click }) =>
    $click ? 'translateX(100%)' : 'translateX(0%)'};
  background-color: #ff4747;
  width: 50%;
  height: 100%;
  z-index: 10;
  overflow: hidden;
  border-radius: 10px;
`;

export const LeftOverlay = styled(OverlaySidesGlobal)<{ $click: boolean }>`
  // transform: ${({ $click }) =>
    $click ? 'translateX(0%)' : 'translateX(100%)'};
  right: 0;
  z-index: ${({ $click }) => ($click ? 4 : 5)};
  //opacity: ${({ $click }) => ($click ? '0' : '1')};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 10px 0;
  }
`;

export const RightOverlay = styled(OverlaySidesGlobal)<{ $click: boolean }>`
  left: 0;
  z-index: ${({ $click }) => ($click ? 5 : 4)};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 10px 0;
  }
`;

export const LeftCaption = styled(CaptionGlobal)<{ $click: boolean }>`
  left: ${({ $click }) => ($click ? '-100%' : '0%')};
  gap: 20px 0;

  h2 {
	  font-weight: 800;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;
export const RightCaption = styled(CaptionGlobal)<{ $click: boolean }>`
	right: ${({ $click }) => ($click ? '0%' : '-100%')};
	gap: 20px 0;

	h2 {
		font-weight: 800;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
	}
`;
export const Sign = styled.button`
  position: absolute;
  bottom: 35%;

  background-color: transparent;
  border: 2px solid white;
  border-radius: 6px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    scale: 1.04;
  }
`;
