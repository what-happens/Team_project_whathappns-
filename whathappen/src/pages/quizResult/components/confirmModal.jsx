import styled from "styled-components";
import { CommonModal, ModalBackdrop } from "./ModalStyle";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";

const ConfirmExit = styled(CommonModal)`
  width: 49rem;
  height: 22.6rem;
  border-radius: 2rem;
  ${media.medium`
    width: 35rem;
  height: 16rem;
  border-radius: 1.8rem;
`}
`;

const ConfirmExitMessage = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  margin: 2.4rem;
  text-align: center;
  ${media.medium`
    font-size: 1.8rem;
`}
`;

const ButtonType = styled.div`
  display: flex;
  gap: 1.8rem;
`;

export default function ConfirmExitModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <ModalBackdrop onClick={onClose} />
      <ConfirmExit open={isOpen}>
        <ConfirmExitMessage>
          진행 데이터는 저장되지 않습니다. <br />
          정말로 종료하시겠습니까?
        </ConfirmExitMessage>
        <ButtonType>
          <Button width="11.3rem" onClick={onClose}>
            예
          </Button>
          <Button width="11.3rem" onClick={onClose}>
            아니요
          </Button>
        </ButtonType>
      </ConfirmExit>
    </>
  );
}

ConfirmExitModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
