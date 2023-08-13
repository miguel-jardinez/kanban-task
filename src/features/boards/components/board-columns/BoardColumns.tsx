import { Typography } from '@/components/typography';
import { BoardColumnContainer, ColumnContainer } from '@/features/boards/components/board-columns/boardColumn.styled';
import { Columns } from '@/app/Context/board-context/store/board-reducer';
import { BoardCard } from '@/features/boards/components/board-card';
import { Spacing } from '@/components/spacing';

interface BoardColumnsProps {
  columns: Columns[]
}

export const BoardColumns: React.FC<BoardColumnsProps> = ({ columns }) => (
  <BoardColumnContainer>
    { columns.map(({ name, id, tasks }) => (
      <ColumnContainer key={id}>
        <Typography variant="h4">{`${name} (${tasks.length})`}</Typography>
        <Spacing height="2.4rem" />
        {
          tasks.map((task) => (
            <BoardCard key={task.title} task={task} />
          ))
        }
      </ColumnContainer>
    ))}
  </BoardColumnContainer>
);
