'use client';

import { createContext, Dispatch } from 'react';
import { initialState, InitialState } from '@/app/Context/board-context/store/board-reducer';
import { ActionTypes } from '@/app/Context/board-context/store/actions';

interface CreateContext {
  state: InitialState,
  dispatch: Dispatch<ActionTypes>
}

export const BoardContext = createContext<CreateContext>({
  state: initialState,
  dispatch: () => null,
});
