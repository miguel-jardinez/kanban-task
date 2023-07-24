import { CheckboxContainer, CheckboxLabel, CheckboxStyled } from '@/components/checkbox/checkbox.styled';
import { Typography } from '@/components/typography';
import React from 'react';

interface CheckboxProps {
  children: React.ReactNode
  id: string;
  checked: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, id, checked }) => (
  <CheckboxContainer checked={checked}>
    <CheckboxStyled readOnly checked={checked} type="checkbox" id={id} />
    <CheckboxLabel htmlFor={id}>
      <Typography variant="body">{ children }</Typography>
    </CheckboxLabel>
  </CheckboxContainer>
);
