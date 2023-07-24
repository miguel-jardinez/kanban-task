'use client';

import React, { useReducer } from 'react';
import { ThemeContext } from '@/app/Context/theme-context/ThemeContext';
import { initialState, reducer } from '@/app/Context/theme-context/store/theme-reducer';
import { ThemeProvider } from 'styled-components';
import { MainLayout } from '@/components/layout/main-layout/MainLayout';

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.value}>
        <MainLayout>
          { children }
        </MainLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
