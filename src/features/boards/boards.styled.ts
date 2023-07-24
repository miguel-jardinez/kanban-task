import styled from 'styled-components';

export const BoardsContainer = styled.main`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  display: flex;
  flex-direction: column;
`;
