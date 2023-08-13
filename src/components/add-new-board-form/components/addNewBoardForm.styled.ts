import styled from 'styled-components';
import { Heading2 } from '@/components/typography/typography.styled';
import Image from 'next/image';

export const AddNewBoardFormTitle = styled(Heading2)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const InputColumnTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputColumnTextImage = styled(Image)`
  margin-bottom: 1.2rem;
  margin-left: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
`;
