import {
  BoardsContainer,
  ListItemContainer,
  SettingsContainer,
  SideBarAddNewBoardButton,
  SideBarImage,
  SideBarImageListItem,
  SideBarStyled,
  SideBarTitle,
  SideBarTitleListItem,
} from '@/components/side-bar/SideBar.styled';
import { useTheme } from '@/app/Context/theme-context/hooks/useTheme';
import { useBoard } from '@/app/Context/board-context/hook/useBoard';
import { SwitchButton } from '@/components/switch-button/SwitchButton';
import { ImageEnum } from '@/utils/ImageEnum';
import { ShowButton } from '@/components/side-bar/components/show-button';
import { usePathname, useRouter } from 'next/navigation';
import { normalizeUrl } from '@/utils/normalize';

export const SideBard = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { state, handleSideBarOpen } = useBoard();
  const { isDark } = useTheme();

  const handleNavigate = (name: string) => {
    router.push(`/board/${normalizeUrl(name)}`);
  };

  const isActive = (name: string) => {
    const path = pathName.replace('/board/', '');
    return path === normalizeUrl(name);
  };

  console.log(isDark);

  return (
    <>
      <SideBarStyled isSideBarOpen={state.isSideBarOpen}>
        <SideBarImage width={153} height={25} src={isDark ? ImageEnum.LOGO_WHITE : ImageEnum.LOGO_DARK} alt="Logo" />
        <BoardsContainer>
          <SideBarTitle>{`ALL BOARDS (${state.boards.length})`}</SideBarTitle>
          {
            state.boards.map((board) => (
              <ListItemContainer
                onClick={() => handleNavigate(board.name)}
                isActive={isActive(board.name)}
                key={board.id}
              >
                <SideBarImageListItem
                  height={16}
                  width={16}
                  src={!isActive(board.name) ? ImageEnum.BOARD : ImageEnum.BOARD_WHITE}
                  alt={`Icon board ${board.name}`}
                />
                <SideBarTitleListItem isActive={isActive(board.name)}>
                  {board.name}
                </SideBarTitleListItem>
              </ListItemContainer>
            ))
          }
          <ListItemContainer>
            <SideBarImageListItem
              height={16}
              width={16}
              src={ImageEnum.BOARD_PURPLE}
              alt="Icon add new board"
            />
            <SideBarAddNewBoardButton>+ Create New Board</SideBarAddNewBoardButton>
          </ListItemContainer>
        </BoardsContainer>

        <SettingsContainer>
          <SwitchButton />
          <ListItemContainer onClick={handleSideBarOpen}>
            <SideBarImageListItem
              height={16}
              width={16}
              src={ImageEnum.HIDE_SIDEBAR}
              alt="Icon add new board"
            />
            <SideBarTitleListItem>Hide SideBar</SideBarTitleListItem>
          </ListItemContainer>
        </SettingsContainer>
      </SideBarStyled>
      <ShowButton />
    </>
  );
};
