import styled from 'styled-components';

interface ShowButtonStyledProps {
  isSideBarOpen: boolean;
}

export const ShowButtonStyled = styled.div<ShowButtonStyledProps>`
  position: absolute;
  bottom: 3.2rem;
  width: 5.6rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainPurple};
  border-radius: 0 4.8rem 4.8rem 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  left: ${({ isSideBarOpen }) => (isSideBarOpen ? '-6rem' : '0')};
`;
