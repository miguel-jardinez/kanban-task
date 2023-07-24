import { OPEN_MODAL, CLOSE_MODAL } from './modal-types';

type OPEN = { type: typeof OPEN_MODAL };
type CLOSE = { type: typeof CLOSE_MODAL };

export type ActionTypes = OPEN | CLOSE;
