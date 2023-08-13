import {
  HeaderBoardTitle, HeaderImage, HeaderImageContainer,
  HeaderStyled,
} from '@/components/header/Header.styled';
import { Button } from '@/components/button';
import { usePathname } from 'next/navigation';
import { getBoardName } from '@/utils/normalize';
import { ImageEnum } from '@/utils/ImageEnum';
import { useTheme } from '@/app/Context/theme-context/hooks/useTheme';
import { useBoard } from '@/app/Context/board-context/hook/useBoard';
import { useModal } from '@/components/modal/hook/useModal';
import React from 'react';

export const Header = () => {
  const { isDark } = useTheme();
  const { state } = useBoard();
  const path = usePathname();
  const { ModalContainer, openModal } = useModal({ children: <h1>Hola mundo</h1> });

  return (
    <>
      <ModalContainer />
      <HeaderStyled>
        <HeaderImageContainer>
          { !state.isSideBarOpen
            && (<HeaderImage width={153} height={25} src={isDark ? ImageEnum.LOGO_WHITE : ImageEnum.LOGO_DARK} alt="Logo" />)}
          <HeaderBoardTitle>{getBoardName(path)}</HeaderBoardTitle>
        </HeaderImageContainer>
        <Button onClick={openModal} variant="primaryS">+ Add New Task</Button>
      </HeaderStyled>
    </>
  );
};
