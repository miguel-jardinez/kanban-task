import styled from 'styled-components';

export const SwitchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundSwitchTheme};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 0.6rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
`;
export const SwitchButtonStyled = styled.div`
  width: 4rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.mainPurple};
  border-radius: 1rem;
  margin: 0 2.4rem;
  position: relative;
  transition: all 150ms ease-in-out;
`;
export const Switch = styled.input`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
  z-index: 2;
`;
export const SwitchButtonMark = styled.span<{ checked: boolean }>`
  height: 1.4rem;
  width: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  border-radius: 1rem;
  position: absolute;
  top: 0.3rem;
  left: ${({ checked }) => (checked ? '2.3rem' : '0.3rem')}
`;
