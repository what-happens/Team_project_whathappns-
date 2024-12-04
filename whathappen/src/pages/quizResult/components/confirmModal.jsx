import styled from "styled-components";
import { CommonModal, Backdrop } from "./ModalStyle";
import PropTypes from "prop-types";

const ConfirmExit = styled(CommonModal)`
  width: 49rem;
  height: 22.6rem;
  border-radius: 20px;
`;

const ConfirmExitMessage = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  margin: 2.4rem;
  text-align: center;
`;

const ButtonType = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const YesOrNo = styled.button`
  width: 11.3rem;
  height: 4.6rem;
  border-radius: 20px;
  color: #fff;
  font-weight: 400;
  background: #2e5dff;
  border: none;
`;

export default function ConfirmExitModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <Backdrop onClick={onClose} />
      <ConfirmExit open={isOpen}>
        <ConfirmExitMessage>
          진행 데이터는 저장되지 않습니다. <br />
          정말로 종료하시겠습니까?
        </ConfirmExitMessage>
        <ButtonType>
          <YesOrNo onClick={onClose}>예</YesOrNo>
          <YesOrNo onClick={onClose}>아니요</YesOrNo>
        </ButtonType>
      </ConfirmExit>
    </>
  );
}

ConfirmExitModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
