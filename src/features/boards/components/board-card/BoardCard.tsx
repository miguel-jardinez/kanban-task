import React from 'react';
import { Tasks } from '@/app/Context/board-context/store/board-reducer';
import { BoardCardContainer } from '@/features/boards/components/board-card/boardCard.styled';
import { Typography } from '@/components/typography';
import { Spacing } from '@/components/spacing';

interface BoardCardProps {
  task: Tasks;
}

export const BoardCard: React.FC<BoardCardProps> = ({ task }) => {
  const subtaskLeft = task.subtasks.filter((subtask) => !subtask.isCompleted);

  return (
    <BoardCardContainer>
      <Typography variant="h3">{task.title}</Typography>
      <Spacing height="0.8rem" />
      <Typography variant="body">
        {`${subtaskLeft.length} of ${task.subtasks.length} task`}
      </Typography>
    </BoardCardContainer>
  );
};
