import { Modal } from '@/components/modal';
import React, { useState } from 'react';

interface UseModalProps {
  children: React.ReactNode
}

export const useModal = ({ children }: UseModalProps) => {
  const [handleModal, setHandleModal] = useState(false);

  const openModal = () => {
    setHandleModal(true);
  };

  const closeModal = () => {
    setHandleModal(false);
  };

  const ModalContainer = () => (
    <>
      {handleModal
          && (
            <Modal closeModal={closeModal}>
              {children}
            </Modal>
          )}
    </>
  );

  return {
    ModalContainer,
    openModal,
    closeModal,
  };
};
