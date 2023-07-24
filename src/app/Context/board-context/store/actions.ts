import { Board } from '@/app/Context/board-context/store/board-reducer';
import {
  ADD_NEW_BOARD, DELETE_BOARD, HIDE_SIDEBAR, SHOW_SIDEBAR,
} from '@/app/Context/board-context/store/board-types';

type AddNewBoard = { type: typeof ADD_NEW_BOARD, payload: Board };
type DeleteBoard = { type: typeof DELETE_BOARD, payload: { id: string } };
type ShowSideBar = { type: typeof SHOW_SIDEBAR };
type HideSideBar = { type: typeof HIDE_SIDEBAR };

export type ActionTypes = AddNewBoard | DeleteBoard | ShowSideBar | HideSideBar;
