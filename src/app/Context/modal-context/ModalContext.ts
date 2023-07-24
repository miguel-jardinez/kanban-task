'use client';

import { createContext, Dispatch } from 'react';
import { initialState, InitialState } from '@/app/Context/modal-context/store/modal-reducer';
import { ActionTypes } from '@/app/Context/modal-context/store/modal-actions';

interface CreateContext {
  state: InitialState,
  dispatch: Dispatch<ActionTypes>
}

export const ModalContext = createContext<CreateContext>({
  state: initialState,
  dispatch: () => null,
});
