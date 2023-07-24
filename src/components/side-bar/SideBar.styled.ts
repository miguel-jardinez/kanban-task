import styled from 'styled-components';
import Image from 'next/image';
import { Heading3, Heading4 } from '@/components/typography/typography.styled';

interface SideBarStyledProps {
  isSideBarOpen: boolean;
}

interface ListItemContainerProps {
  isActive?: boolean;
}

export const SideBarStyled = styled.div<SideBarStyledProps>`
  display: flex;
  flex-direction: column;
  width: ${({ isSideBarOpen }) => (isSideBarOpen ? '30rem' : '0')};
  height: 100vh;
  transform: ${({ isSideBarOpen }) => (!isSideBarOpen ? 'translateX(-30rem)' : 'translateX(0)')};
  padding: ${({ isSideBarOpen, theme }) => (isSideBarOpen ? `3.4rem ${theme.spacing.xl}` : '0')};;
  border-right: ${({ isSideBarOpen, theme }) => (isSideBarOpen ? `0.1rem solid ${theme.colors.linesLight}` : 'none')};
  background-color: ${({ theme }) => theme.colors.backgroundSideBar};
`;

export const ListItemContainer = styled.div<ListItemContainerProps>`
  display: flex;
  position: relative;
  padding: ${({ theme }) => theme.spacing.md} 0;
  height: 4.8rem;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.mainPurple : 'transparent')};
  border-radius: 0 4rem 4rem 0;
  
  &::before {
    content: "";
    height: 4.8rem;
    width: 4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -4rem;
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.mainPurple : 'transparent')};;
  }
`;

export const SideBarTitle = styled(Heading4)`
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 1.9rem;
`;

export const SideBarTitleListItem = styled(Heading3)<ListItemContainerProps>`
  color: ${({ theme, isActive }) => (!isActive ? theme.colors.mediumGrey : theme.colors.white)};
`;

export const SideBarImage = styled(Image)`
  margin-bottom: 5.4rem;
`;

export const SideBarImageListItem = styled(Image)`
  margin-right: 1.6rem;
`;

export const SideBarAddNewBoardButton = styled(Heading3)`
  color: ${({ theme }) => theme.colors.mainPurple};
`;

export const BoardsContainer = styled.div`
  flex: 1;
`;
export const SettingsContainer = styled.div``;
