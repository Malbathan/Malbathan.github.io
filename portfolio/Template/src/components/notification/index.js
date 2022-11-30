import React, { useRef, useEffect, useCallback } from 'react';
import { Data } from './data';

import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  transition: background 2s;
`;

const ModalWrapper = styled.div`
  width: 20vw;
  max-height: 100vh;
  box-shadow: 0 5px 16px rgb(0 0 0 / 20%);
  background: #fff;
  color: #000;
  position: fixed;
  display: flex;
  justify-content: center;
  right: 0;
  top: 10px;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  max-width: 284px;

  h3{
    margin-top: 1rem;
    margin-left: 20px;
  }
  p {
    color: #BDBDBD;
    margin-bottom: 1rem;
    font-size: 12px;
    border-bottom: 1px solid #BDBDBD;
    padding: 20px;
    width: 20vw
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Notification = ({ showModal, setShowModal }) => {
  const modalRef = useRef();


  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <div >
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>
                <h2>Notificações</h2>
                {Data &&
                
                  Data?.map((item, index) => {
                    console.log(item, index)
                   return (
                    <div key={index}>
                      <h3> {item.title} </h3>
                      <p> {item.content} </p>
                    </div>
                   )
                  })
                }
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </div>
        </Background>
      ) : null}
    </>
  );
};