import { Typography } from '@/components/typography';
import React from 'react';
import { TextFieldLabel } from '@/components/labels/labels.styled';

interface LabelsProps {
  text: string;
  id: string;
}

export const Labels: React.FC<LabelsProps> = ({ text, id }) => (

  <TextFieldLabel htmlFor={id}>
    <Typography variant="body">{ text }</Typography>
  </TextFieldLabel>
);
