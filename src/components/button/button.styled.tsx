import styled, { DefaultTheme } from 'styled-components';
import { ButtonVariant } from '@/components/button/Button';

interface ButtonStyledProps {
  variant: ButtonVariant;
}

const getStyledOfButton = (variant: ButtonVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'primary':
      return {
        color: theme.colors.mainPurple,
        hover: theme.colors.mainPurpleHover,
        padding: '1.5rem',
        fontColor: theme.colors.white,
      };
    case 'primaryS':
      return {
        color: theme.colors.mainPurple,
        hover: theme.colors.mainPurpleHover,
        padding: '0.8rem',
        fontColor: theme.colors.white,
      };
    case 'secondary':
      return {
        color: '#EFEFF9',
        hover: '#D8D7F1',
        padding: '0.8rem',
        fontColor: theme.colors.mainPurple,
      };
    default:
      return {
        color: theme.colors.red,
        hover: theme.colors.redHover,
        padding: '0.8rem',
        fontColor: theme.colors.white,
      };
  }
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${({ theme, variant }) => getStyledOfButton(variant, theme).color};
  padding: ${({ theme, variant }) => getStyledOfButton(variant, theme).padding} 2rem;
  border-radius: 2.4rem;
  transition: background-color 150ms ease;
  
  &:hover {
    background-color: ${({ theme, variant }) => getStyledOfButton(variant, theme).hover};
  }
  
  h3 {
    color: ${({ theme, variant }) => getStyledOfButton(variant, theme).fontColor};
  }
  
  p {
    opacity: 100%;
    color: ${({ theme, variant }) => getStyledOfButton(variant, theme).fontColor};
  }
`;
