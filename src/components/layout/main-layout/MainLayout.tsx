'use client';

import React from 'react';
import { MainContainer, MainLayoutStyled } from '@/components/layout/main-layout/MainLayout.styled';
import { Header } from '@/components/header';
import { SideBard } from '@/components/side-bar';

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <MainLayoutStyled>
    <SideBard />
    <MainContainer>
      <Header />
      { children }
    </MainContainer>
  </MainLayoutStyled>
);
