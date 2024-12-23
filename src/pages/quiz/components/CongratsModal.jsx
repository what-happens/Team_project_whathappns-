import styled from "styled-components";
import congratsImg from "../../../assets/congratulations.png";
import { CommonModal, ModalBackdrop } from "./ModalStyle";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";
import { Link } from "react-router-dom";

const Congratulations = styled(CommonModal)`
  width: 49rem;
  height: 37.6rem;
  border-radius: 2rem;
  ${media.medium`
    width: 35rem;
  height: 27rem;
  border-radius: 1.8rem;
`}
  ${media.small`
    width: 25rem;
  height: 20.3rem;
  border-radius: 1.4rem;
`}
  & > a > button {
    ${media.medium`
    font-size: 1.6rem;
    padding:0.5rem 1.6rem;
    width:17rem
`}
    ${media.small`
      width: 12rem;
    font-size: 1rem;
    padding:0.05rem 1.2rem;
`}
  }
`;

const CongratsImg = styled.img`
  margin-bottom: 3.9rem;
  ${media.medium`
    width: 24rem;
    margin-bottom: 2.5rem;
`}
  ${media.small`
    width: 18rem;
    margin-bottom: 1.8rem;
`}
`;

const SaveMessage = styled.p`
  font-size: 2.6rem;
  font-weight: 700;
  width: 31.5rem;
  text-align: center;
  margin-bottom: 1.9rem;
  ${media.medium`
    font-size: 1.8rem;
    width: 65%;
`}
  ${media.small`
    width: 70%;
    font-size: 1.4rem;
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
    margin-bottom: 2rem;
`}
  ${media.small`
    font-size: 1.2rem;
    width: 70%;
    margin-bottom: 1.5rem;
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
          복습노트에서 저장된 문제들을 다시한번 풀어보아요!!
        </MyPageMessage>
        <Link to="/review">
          <Button onClick={onClose}>복습노트로 이동</Button>
        </Link>
      </Congratulations>
    </>
  );
}

CongratulationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
