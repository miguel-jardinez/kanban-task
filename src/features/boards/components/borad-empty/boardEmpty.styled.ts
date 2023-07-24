import styled from 'styled-components';
import { Heading2 } from '@/components/typography/typography.styled';

export const BoardEmptyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const BoardEmptyHeadLine = styled(Heading2)`
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 3.2rem;
`;
