import { BoardsContainer } from '@/features/boards/boards.styled';
import { BoardEmpty } from '@/features/boards/components/borad-empty';
import { useBoard } from '@/app/Context/board-context/hook/useBoard';
import { usePathname } from 'next/navigation';
import { getBoardName } from '@/utils/normalize';
import { BoardColumns } from '@/features/boards/components/board-columns';

export const Boards = () => {
  const pathname = usePathname();
  const { state } = useBoard();
  const board = state.boards.find(({ name }) => name.toLowerCase() === getBoardName(pathname));

  return (
    <BoardsContainer>
      { board?.columns.length === 0
        ? <BoardEmpty />
        : <BoardColumns columns={board?.columns ?? []} />}
    </BoardsContainer>
  );
};
