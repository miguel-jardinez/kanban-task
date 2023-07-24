import styled from 'styled-components';

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
`;

export const ModalDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 80%;
  width: 60%;
`;
