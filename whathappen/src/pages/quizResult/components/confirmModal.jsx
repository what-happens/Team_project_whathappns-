import styled from "styled-components";
import { CommonModal, Backdrop } from "./ModalStyle";
import PropTypes from "prop-types";

const ConfirmExit = styled(CommonModal)`
  width: 490px;
  height: 226px;
  border-radius: 20px;
`;

const ConfirmExitMessage = styled.p`
  font-size: 24px;
  font-weight: 300;
  width: 344px;
  margin: 24px;
  text-align: center;
`;

const ButtonType = styled.div`
  display: flex;
  gap: 18px;
`;

const YesOrNo = styled.button`
  width: 113px;
  height: 46px;
  border-radius: 20px;
  color: #fff;
  font-weight: 400;
  background: #2e5dff;
  border: none;
`;

export default function ConfirmExitModal({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 닫히면 아무 것도 렌더링하지 않음
  return (
    <>
      <Backdrop onClick={onClose} /> {/* 배경 클릭 시 모달 닫기 */}
      <ConfirmExit open={isOpen}>
        <ConfirmExitMessage>
          진행 데이터는 저장되지 않습니다. 정말로 종료하시겠습니까?
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
