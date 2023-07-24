import styled from 'styled-components';

interface CheckboxContainerProps {
  checked: boolean;
}

export const CheckboxStyled = styled.input`
  appearance: none;
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 1.6rem;
  
  &::before {
    content: url("/images/icon-check.svg");
    display: none;
  }
  
  &:checked {
    background-color: ${({ theme }) => theme.colors.mainPurple};
    
    &::before {    
      display: flex;
      align-items: center;
      justify-content: center;
    }
    }
  }
`;

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  display: flex;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background 150ms ease;
  cursor: pointer;
  
  p {
    color: ${({ checked, theme }) => (checked ? theme.colors.mediumGrey : theme.colors.lines)};
    text-decoration: ${({ checked }) => (checked ? 'line-through' : 'normal')};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.checkboxHover};
  }
`;

export const CheckboxLabel = styled.label``;
