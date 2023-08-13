import styled from 'styled-components';

interface SpacingStyledProps {
  height: string;
}

export const SpacingStyled = styled.div<SpacingStyledProps>`
  height: ${({ height }) => height};
`;
