'use client';

import { ModalContext } from '@/app/Context/modal-context/ModalContext';
import React, { useReducer } from 'react';
import { initialState, reducer } from '@/app/Context/modal-context/store/modal-reducer';

interface ModalContextProviderProps {
  children: React.ReactNode;
}

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
