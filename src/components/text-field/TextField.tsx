import {
  ErrorLabel,
  TextFieldContainer,
  TextFieldStyled,
} from '@/components/text-field/TextField.styled';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextFieldProps {
  isError: boolean;
  placeholder: string
  id: string;
  register?: UseFormRegisterReturn<string>
  value?: string;
  disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  isError,
  placeholder,
  id,
  register,
  value,
  disabled = false,
}) => (
  <>
    <TextFieldContainer isError={isError}>
      <TextFieldStyled
        {...register}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {
        isError && <ErrorLabel>Can’t be empty</ErrorLabel>
      }
    </TextFieldContainer>
  </>
);
