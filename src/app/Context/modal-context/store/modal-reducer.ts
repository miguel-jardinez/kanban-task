import { ActionTypes } from '@/app/Context/modal-context/store/modal-actions';

export interface InitialState {
  open: boolean
}

export const initialState: InitialState = {
  open: false,
};

export const reducer = (state: InitialState, action: ActionTypes) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, open: true };
    case 'CLOSE_MODAL':
      return { ...state, open: false };
    default:
      return { ...state, open: false };
  }
};
