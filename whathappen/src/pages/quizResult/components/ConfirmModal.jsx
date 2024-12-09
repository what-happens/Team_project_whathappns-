import styled from "styled-components";
import { CommonModal, ModalBackdrop } from "./ModalStyle";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";
import { Link } from "react-router-dom";

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
`;

const ConfirmExitMessage = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  margin: 2.4rem;
  text-align: center;
  ${media.medium`
    font-size: 1.8rem;
`}
  ${media.small`
    font-size: 1.3rem;
    margin: 1.7rem;
`}
`;

const ButtonType = styled.div`
  display: flex;
  gap: 1.8rem;
  ${media.small`
    gap: 0.8rem;
`}
  & > button {
    ${media.medium`
    font-size: 1.6rem;
    padding:0.5rem 1.6rem;
    width:10rem
`}
    ${media.small`
      width: 8rem;
    font-size: 1rem;
    padding:0.05rem 1.2rem;
`}
  }
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
          <Link to="/">
            <Button width="11.3rem" onClick={onClose}>
              예
            </Button>
          </Link>
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
