import { ShowButtonStyled } from '@/components/side-bar/components/show-button/ShowButton.styled';
import Image from 'next/image';
import { ImageEnum } from '@/utils/ImageEnum';
import { useBoard } from '@/app/Context/board-context/hook/useBoard';

export const ShowButton = () => {
  const { handleSideBarOpen, state } = useBoard();

  return (
    <ShowButtonStyled isSideBarOpen={state.isSideBarOpen} onClick={handleSideBarOpen}>
      <Image width={16} height={10} src={ImageEnum.SHOW_SIDEBAR} alt="Show Side Bar Image" />
    </ShowButtonStyled>
  );
};
