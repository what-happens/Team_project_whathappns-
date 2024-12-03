import styled from "styled-components";
import congratsImg from "../../../assets/img/congratulations.png";
import { CommonModal, Backdrop } from "./ModalStyle";
import PropTypes from "prop-types";

const Congratulations = styled(CommonModal)`
  width: 490px;
  height: 376px;
  border-radius: 20px;
`;

const CongratsImg = styled.img`
  margin-bottom: 39px;
`;

const SaveMessage = styled.p`
  font-size: 26px;
  font-weight: 500;
  width: 315px;
  text-align: center;
  margin-bottom: 19px;
`;

const MyPageMessage = styled.p`
  font-size: 18px;
  font-weight: 300;
  width: 275px;
  text-align: center;
  margin-bottom: 57px;
`;

const GotoMyPage = styled.button`
  width: 183px;
  height: 46px;
  border-radius: 20px;
  background-color: #2e5dff;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export default function CongratulationsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <Congratulations>
        <CongratsImg src={congratsImg} alt="축하 이미지" />
        <SaveMessage>
          틀린문제와 북마크한 문제를 복습 노트에 저장했습니다!
        </SaveMessage>
        <MyPageMessage>
          마이페이지에서 복습 노트에 저장된 문제들을 복습해보아요!!
        </MyPageMessage>
        <GotoMyPage onClick={onClose}>마이페이지로 이동</GotoMyPage>
      </Congratulations>
    </>
  );
}

CongratulationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
