import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.50);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ModalDetails = styled.div`
  position: absolute;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background};
  width: 52.3rem;
  padding: 3.2rem;
  border-radius: 0.6rem;
`;
