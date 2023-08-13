import React from 'react';
import { ButtonStyled } from '@/components/button/button.styled';
import { Typography } from '@/components/typography';

export type ButtonVariant = 'primary' | 'primaryS' | 'secondary' | 'destructive';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant: ButtonVariant;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children, onClick, variant, fullWidth = false,
}) => (
  <ButtonStyled fullWidth={fullWidth} variant={variant} onClick={onClick}>
    <Typography variant={variant === 'primary' ? 'h3' : 'bodyL'}>{ children }</Typography>
  </ButtonStyled>
);
