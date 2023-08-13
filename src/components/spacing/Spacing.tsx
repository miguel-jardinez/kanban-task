import { SpacingStyled } from '@/components/spacing/spacing.styled';
import React from 'react';

interface SpacingProps {
  height: string;
}

export const Spacing: React.FC<SpacingProps> = ({ height }) => <SpacingStyled height={height} />;
