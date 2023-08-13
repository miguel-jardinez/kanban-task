import styled from 'styled-components';

export const BoardColumnContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
`;

export const ColumnContainer = styled.div`
  width: 33%;
`;
