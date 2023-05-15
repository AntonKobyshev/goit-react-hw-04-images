import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ closeModal, tags, modalImg }) {
 
  useEffect(() => {
    
    
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        closeModal(); }        
      };

      window.addEventListener('keydown', closeByEsc);

      return () => window.removeEventListener('keydown', closeByEsc);
    
  }, [closeModal]);
  
    const closeByBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

    return createPortal(
      <Overlay onClick={closeByBackdropClick}>
        <ModalViewer>
          <ModalImg src={modalImg} alt={tags} />
        </ModalViewer>
      </Overlay>,
      modalRoot
    );
  }


Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
