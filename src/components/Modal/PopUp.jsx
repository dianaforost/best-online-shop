import { cloneElement, useState } from 'react';
import { ModalPopUp, OpenButton } from './PopUp.styled';
// import Modal from 'styled-react-modal';

// Modal.setAppElement('#root');

export const PopUp = props => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { children, data, ariaLabel } = props;
  const [opacity, setOpacity] = useState(0);

  function openModal() {
    setIsOpen(true);
    setOpacity(1);
  }
  function closeModal() {
    setIsOpen(false);
    setOpacity(0);
  }
  function cloneChildren(child) {
    return child ? cloneElement(child, { closeModal }) : null;
  }
  return (
    <>
      <OpenButton onClick={openModal} aria-label={`${ariaLabel}`}>
        {data}
      </OpenButton>
      <ModalPopUp
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`modal`}
        onBackgroundClick={closeModal}
        onEscapeKeydown={closeModal}
        overlayClassName={`modal-overlay`}
        contentLabel="modal"
        opacity={opacity}
      >
        {cloneChildren(children)}
      </ModalPopUp>
    </>
  );
};
