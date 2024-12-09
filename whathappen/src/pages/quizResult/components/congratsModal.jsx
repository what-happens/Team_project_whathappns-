import styled from "styled-components";
import congratsImg from "../../../assets/congratulations.png";
import { CommonModal, ModalBackdrop } from "./ModalStyle";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";

const Congratulations = styled(CommonModal)`
  width: 49rem;
  height: 37.6rem;
  border-radius: 2rem;
  ${media.medium`
    width: 35rem;
  height: 27rem;
  border-radius: 1.8rem;
`}
`;

const CongratsImg = styled.img`
  margin-bottom: 3.9rem;
  ${media.medium`
    width: 24rem;
`}
`;

const SaveMessage = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  width: 31.5rem;
  text-align: center;
  margin-bottom: 1.9rem;
  ${media.medium`
    font-size: 1.8rem;
    width: 65%;
`}
`;

const MyPageMessage = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  width: 27.5rem;
  text-align: center;
  margin-bottom: 5.7rem;
  ${media.medium`
    font-size: 1.4rem;
    width: 60%;
    margin-bottom: 4rem;
`}
`;

export default function CongratulationsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <ModalBackdrop onClick={onClose} />
      <Congratulations>
        <CongratsImg src={congratsImg} alt="축하 이미지" />
        <SaveMessage>
          틀린문제와 북마크한 문제를 복습 노트에 저장했습니다!
        </SaveMessage>
        <MyPageMessage>
          마이페이지에서 복습 노트에 저장된 문제들을 복습해보아요!!
        </MyPageMessage>
        <Button width="20rem" onClick={onClose}>
          마이페이지로 이동
        </Button>
      </Congratulations>
    </>
  );
}

CongratulationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
