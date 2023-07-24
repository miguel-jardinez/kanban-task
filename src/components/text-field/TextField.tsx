import {
  ErrorLabel,
  TextFieldContainer,
  TextFieldLabel,
  TextFieldStyled,
} from '@/components/text-field/TextField.styled';
import React from 'react';
import { Typography } from '@/components/typography';

interface TextFieldProps {
  value: string;
  onChangeValue: (value: string) => void;
  label: string;
  isError: boolean;
  placeholder: string
  id: string
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChangeValue,
  label,
  isError,
  placeholder,
  id,
}) => (
  <>
    <TextFieldLabel htmlFor={id}>
      <Typography variant="body">{ label }</Typography>
    </TextFieldLabel>
    <TextFieldContainer isError={isError}>
      <TextFieldStyled
        id={id}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
      {
        isError && <ErrorLabel>Can’t be empty</ErrorLabel>
      }
    </TextFieldContainer>
  </>
);
