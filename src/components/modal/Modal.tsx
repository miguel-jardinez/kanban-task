import { ModalStyled, ModalDetails, ModalContainer } from '@/components/modal/Modal.styled';
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  closeModal?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => (
  <>
    <ModalStyled onClick={closeModal} />
    <ModalContainer>
      <ModalDetails>
        {children}
      </ModalDetails>
    </ModalContainer>
  </>
);
