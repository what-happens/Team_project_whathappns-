import React from "react";
import styled from "styled-components";
import AnswerIframe from "./AnswerIframe";
import PropTypes from "prop-types";
import closeBtn from "../../../assets/back_link.png";
export default function MobileModal({ closeModal }) {
  return (
    <>
      <Dimd onClick={closeModal} />
      <StyledModal>
        <CloseButton onClick={closeModal}>
          <img src={closeBtn} alt="모달 닫기" />
        </CloseButton>
        <AnswerIframe />
      </StyledModal>
    </>
  );
}

MobileModal.propTypes = {
  closeModal: PropTypes.func,
};

const Dimd = styled.div`
  width: 100%;
  height: calc(100% + 6rem);
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledModal = styled.div`
  position: fixed;
  background-color: #fff;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 1000;
  border: none;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  img {
    width: 3rem;
    height: 100%;
    object-fit: auto;
  }
`;
