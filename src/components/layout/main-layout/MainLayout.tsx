'use client';

import React from 'react';
import { MainContainer, MainLayoutStyled } from '@/components/layout/main-layout/MainLayout.styled';
import { Header } from '@/components/header';
import { SideBard } from '@/components/side-bar';
import { useTheme } from '@/app/Context/theme-context/hooks/useTheme';

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { loading } = useTheme();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (loading) return <></>;

  return (
    <MainLayoutStyled>
      <SideBard />
      <MainContainer>
        <Header />
        {children}
      </MainContainer>
    </MainLayoutStyled>
  );
};
