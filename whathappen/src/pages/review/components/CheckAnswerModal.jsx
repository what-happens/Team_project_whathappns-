import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import congratulations from "../../../assets/congratulations.png";
import background from "../../../assets/quiz-result_background.svg";
import Button from "../../../components/Button";

export default function CheckAnswerModal({ setIsCorrect }) {
  const handleClose = () => {
    setIsCorrect(null);
  };

  return (
    <>
      <CorrectBox>
        <CongratulationsText />
        <Success>
          축하합니다!<br></br>정답을 맞추셨습니다!!
        </Success>
        <Text>복습노트 에서 해당 문제를 삭제할까요??</Text>
        <ButtonWarp>
          <Button onClick={handleClose}>예</Button>
          <Button backgroundColor="red" onClick={handleClose}>
            아니오
          </Button>
        </ButtonWarp>
      </CorrectBox>

      <LoadingPage></LoadingPage>
    </>
  );
}

CheckAnswerModal.propTypes = {
  setIsCorrect: PropTypes.func.isRequired,
};

const jello = keyframes`
  0% {
    -webkit-transform: skew(0deg 0deg);
            transform: skew(0deg 0deg);
  }
  30% {
    -webkit-transform: skew(25deg 25deg);
            transform: skew(25deg 25deg);
  }
  40% {
    -webkit-transform: skew(-15deg, -15deg);
            transform: skew(-15deg, -15deg);
  }
  50% {
    -webkit-transform: skew(15deg, 15deg);
            transform: skew(15deg, 15deg);
  }
  65% {
    -webkit-transform: skew(-5deg, -5deg);
            transform: skew(-5deg, -5deg);
  }
  75% {
    -webkit-transform: skew(5deg, 5deg);
            transform: skew(5deg, 5deg);
  }
  100% {
    -webkit-transform: skew(0deg 0deg);
            transform: skew(0deg 0deg);
  }
`;

const ButtonWarp = styled.div`
  display: flex;
  gap: 2rem;
`;
const Success = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;
const CongratulationsText = styled.div`
  background-image: url(${congratulations});
  width: 50rem;
  height: 10rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
const CorrectBox = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  position: fixed;
  left: 40%;
  top: 30%;
  border-radius: 2rem;
  width: 50rem;
  height: 30rem;
  background-color: white;
  z-index: 999;
  animation: ${jello} 0.8s both;
`;

const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  opacity: 0.3;
  z-index: 20;
`;
