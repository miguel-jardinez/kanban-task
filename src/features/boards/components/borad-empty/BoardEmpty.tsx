import { BoardEmptyHeadLine, BoardEmptyStyled } from '@/features/boards/components/borad-empty/boardEmpty.styled';
import { Button } from '@/components/button';

export const BoardEmpty = () => (
  <BoardEmptyStyled>
    <BoardEmptyHeadLine>
      This board is empty. Create a new column to get started.
    </BoardEmptyHeadLine>
    <Button variant="primary">+ Add New Column</Button>
  </BoardEmptyStyled>
);
