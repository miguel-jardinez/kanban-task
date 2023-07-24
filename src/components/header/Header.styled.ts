import styled from 'styled-components';
import { Heading1 } from '@/components/typography/typography.styled';
import Image from 'next/image';

export const HeaderStyled = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSideBar};
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBoardTitle = styled(Heading1)`
  color: ${({ theme }) => theme.colors.lines};
  text-transform: capitalize;
`;

export const HeaderImageContainer = styled.div`
  display: flex;
`;

export const HeaderImage = styled(Image)`
  margin-right: 6.5rem;
`;
