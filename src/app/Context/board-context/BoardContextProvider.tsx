'use client';

import { BoardContext } from '@/app/Context/board-context/BoardContext';
import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from '@/app/Context/board-context/store/board-reducer';
import { useRouter } from 'next/navigation';
import { normalizeUrl } from '@/utils/normalize';

interface BoardContextProviderProps {
  children: React.ReactNode;
}

export const BoardContextProvider: React.FC<BoardContextProviderProps> = ({ children }) => {
  const route = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.boards.length > 0) {
      route.push(`/board/${normalizeUrl(state.boards[0].name)}`);
    }
  }, [state.boards]);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      { children }
    </BoardContext.Provider>
  );
};
