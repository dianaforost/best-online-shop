import { useState } from 'react';
import { ModalPopUp } from './PopUp.styled';
import { Auth } from 'components/Auth/Auth';

export const PopUp = props => {
  const { modalIsOpen, setIsOpen } = props;
  const [opacity, setOpacity] = useState(0);

  function closeModal() {
    setIsOpen(false);
    setOpacity(0);
  }

  return (
    <>
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
        <Auth closeModal={closeModal} />
      </ModalPopUp>
    </>
  );
};
