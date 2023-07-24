'use client';

import { createContext, Dispatch } from 'react';
import { initialState, InitialState } from '@/app/Context/theme-context/store/theme-reducer';
import { ActionTypes } from '@/app/Context/theme-context/store/actions';

interface ThemeContextProps {
  state: InitialState,
  dispatch: Dispatch<ActionTypes>
}

export const ThemeContext = createContext<ThemeContextProps>({
  state: initialState,
  dispatch: () => null,
});
