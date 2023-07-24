import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.fonts.headingXl.size};
  font-weight: ${({ theme }) => theme.fonts.headingXl.weight};
  line-height: ${({ theme }) => theme.fonts.headingXl.line};
  color: ${({ theme }) => theme.colors.lines};
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.fonts.headingL.size};
  font-weight: ${({ theme }) => theme.fonts.headingL.weight};
  line-height: ${({ theme }) => theme.fonts.headingL.line};
  color: ${({ theme }) => theme.colors.lines};
`;

export const Heading3 = styled.h3`
  font-size: ${({ theme }) => theme.fonts.headingM.size};
  font-weight: ${({ theme }) => theme.fonts.headingM.weight};
  line-height: ${({ theme }) => theme.fonts.headingM.line};
  color: ${({ theme }) => theme.colors.lines};
`;

export const Heading4 = styled.h4`
  font-size: ${({ theme }) => theme.fonts.headingS.size};
  font-weight: ${({ theme }) => theme.fonts.headingS.weight};
  line-height: ${({ theme }) => theme.fonts.headingS.line};
  letter-spacing: ${({ theme }) => theme.fonts.headingS.kerning};
  color: ${({ theme }) => theme.colors.lines};
`;

export const BodyL = styled.p`
  font-size: ${({ theme }) => theme.fonts.bodyL.size};
  font-weight: ${({ theme }) => theme.fonts.bodyL.weight};
  line-height: ${({ theme }) => theme.fonts.bodyL.line};
  color: ${({ theme }) => theme.colors.lines};
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.fonts.bodyM.size};
  font-weight: ${({ theme }) => theme.fonts.bodyM.weight};
  line-height: ${({ theme }) => theme.fonts.bodyM.line};
  color: ${({ theme }) => theme.colors.lines};
`;
