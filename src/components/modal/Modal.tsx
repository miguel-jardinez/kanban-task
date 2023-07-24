import { ModalStyled, ModalDetails } from '@/components/modal/Modal.styled';
import React from 'react';
import { useModalProvider } from '@/app/Context/modal-context/hooks/useModalProvider';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const { closeModal } = useModalProvider();

  return (
    <ModalStyled onClick={closeModal}>
      <ModalDetails>
        {children}
      </ModalDetails>
    </ModalStyled>
  );
};
