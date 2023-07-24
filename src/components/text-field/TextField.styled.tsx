import styled from 'styled-components';
import { BodyL } from '@/components/typography/typography.styled';

interface TextFieldContainerProps {
  isError: boolean
}

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
  border: 0.1rem solid ${({ theme, isError }) => (!isError ? theme.colors.border : theme.colors.red)};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  height: 4rem;
`;

export const TextFieldLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TextFieldStyled = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fonts.bodyL.size};
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  flex: 2;
  
  &::placeholder {
    font-size: ${({ theme }) => theme.fonts.bodyL.size};
  }
`;

export const ErrorLabel = styled(BodyL)`
  color: ${({ theme }) => theme.colors.red};
  flex: 1;
  text-align: right;
  margin-right: ${({ theme }) => theme.spacing.md};
`;
