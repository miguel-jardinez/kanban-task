'use client';

import { useContext } from 'react';
import { BoardContext } from '@/app/Context/board-context/BoardContext';
import {
  ADD_NEW_BOARD, DELETE_BOARD, HIDE_SIDEBAR, SHOW_SIDEBAR,
} from '@/app/Context/board-context/store/board-types';

export const useBoard = () => {
  const { state, dispatch } = useContext(BoardContext);

  const deleteBoard = (id: string) => {
    dispatch({
      type: DELETE_BOARD,
      payload: {
        id,
      },
    });
  };

  const addBoard = (name: string, id: string) => {
    dispatch({
      type: ADD_NEW_BOARD,
      payload: {
        id,
        name,
        columns: [],
      },
    });
  };

  const handleSideBarOpen = () => {
    const isOpen = state.isSideBarOpen;
    if (isOpen) {
      dispatch({ type: HIDE_SIDEBAR });
    } else {
      dispatch({ type: SHOW_SIDEBAR });
    }
  };

  return {
    deleteBoard,
    addBoard,
    handleSideBarOpen,
    state,
  };
};
