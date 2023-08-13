import styled from 'styled-components';

export const BoardCardContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.backgroundSideBar};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg}; ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.sm};
  width: 95%;
  cursor: pointer;
`;
