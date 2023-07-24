import {
  ADD_NEW_BOARD,
  DELETE_BOARD,
  HIDE_SIDEBAR,
  SHOW_SIDEBAR,
} from '@/app/Context/board-context/store/board-types';
import { ActionTypes } from '@/app/Context/board-context/store/actions';

export interface Board {
  id: string;
  name: string;
}

export interface InitialState {
  isSideBarOpen: boolean;
  boards: Board[],
}

export const initialState: InitialState = {
  isSideBarOpen: true,
  boards: [
    {
      id: '1',
      name: 'Platform Launch',
    },
    {
      id: '2',
      name: 'Marketing Plan',
    },
    {
      id: '3',
      name: 'Roadmap',
    },
  ],
};

export const reducer = (state: InitialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return { ...state, isSideBarOpen: true };
    case HIDE_SIDEBAR:
      return { ...state, isSideBarOpen: false };
    case ADD_NEW_BOARD:
      return { ...state, boards: [...state.boards, { ...action.payload }] };
    case DELETE_BOARD:
      return { ...state, boards: state.boards };
    default:
      return state;
  }
};
