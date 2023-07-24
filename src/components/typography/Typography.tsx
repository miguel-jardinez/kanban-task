import React from 'react';
import {
  BodyL, Heading3, Heading1, Heading2, Heading4, Body,
} from '@/components/typography/typography.styled';

type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyL' | 'body';

interface TypographyProps {
  variant: TypographyType
  children: React.ReactNode
}

export const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  switch (variant) {
    case 'h1':
      return <Heading1>{ children }</Heading1>;
    case 'h2':
      return <Heading2>{ children }</Heading2>;
    case 'h3':
      return <Heading3>{ children }</Heading3>;
    case 'h4':
      return <Heading4>{ children }</Heading4>;
    case 'bodyL':
      return <BodyL>{ children }</BodyL>;
    case 'body':
      return <Body>{ children }</Body>;
    default:
      return <Body>{ children }</Body>;
  }
};
