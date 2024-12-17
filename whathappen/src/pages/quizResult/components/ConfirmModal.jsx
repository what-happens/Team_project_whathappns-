import styled from "styled-components";
import { CommonModal, ModalBackdrop } from "./ModalStyle";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";

export default function ConfirmExitModal({ isOpen, onConfirm, onClose }) {
  return (
    <>
      <ModalBackdrop onClick={onClose} />
      <ConfirmExit open={isOpen}>
        <ConfirmExitMessage>
          진행 데이터는 저장되지 않습니다. <br />
          정말로 종료하시겠습니까?
        </ConfirmExitMessage>
        <ButtonType>
          <Button width="11.3rem" onClick={onConfirm}>
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

const ConfirmExit = styled(CommonModal)`
  width: 49rem;
  height: 22.6rem;
  border-radius: 2rem;
  ${media.medium`
    width: 35rem;
  height: 16rem;
  border-radius: 1.8rem;
`}
  ${media.small`
    width: 28rem;
  height: 13rem;
  border-radius: 1.4rem;
`}
  ${media.xsmall`
    width: 24rem;
  height: 11rem;
  border-radius: 1.2rem;
`}
`;

const ConfirmExitMessage = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  margin: 2.4rem;
  text-align: center;
  ${media.medium`
    font-size: 1.8rem;
    margin: 2rem;
`}
  ${media.small`
    font-size: 1.3rem;
    margin: 1.7rem;
`}
  ${media.xsmall`
    font-size: 1rem;
    margin: 0.8rem;
`}
`;

const ButtonType = styled.div`
  display: flex;
  gap: 1.8rem;
  ${media.small`
    gap: 0.8rem;
`}
  & > button, & > a > button {
    ${media.medium`
    font-size: 1.4rem;
    padding:0.5rem 1.6rem;
    width:8rem
`}
    ${media.small`
      width: 8rem;
    font-size: 1rem;
    padding:0.05rem 1.2rem;
`}
    ${media.xsmall`
      width: 5rem;
      font-size: 0.8rem;
`}
  }
`;

ConfirmExitModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
