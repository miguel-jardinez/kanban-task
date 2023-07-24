import { Modal } from '@/components/modal';
import React, { JSX } from 'react';
import { useModalProvider } from '@/app/Context/modal-context/hooks/useModalProvider';

interface UseModalProps {
  children: React.ReactNode
}

export const useModal = ({ children }: UseModalProps) => {
  const { openModal, closeModal, state } = useModalProvider();

  const ModalContainer = () => (
    <>
      {state.open
          && (
            <Modal>
              {children}
            </Modal>
          )}
    </>
  );

  return {
    ModalContainer,
    openModal,
    closeModal,
    state,
  };
};
