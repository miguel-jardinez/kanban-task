import { useContext } from 'react';
import { ModalContext } from '@/app/Context/modal-context/ModalContext';
import { CLOSE_MODAL, OPEN_MODAL } from '@/app/Context/modal-context/store/modal-types';

export const useModalProvider = () => {
  const { dispatch, state } = useContext(ModalContext);

  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
    });
  };

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return {
    openModal,
    closeModal,
    state
  };
};
