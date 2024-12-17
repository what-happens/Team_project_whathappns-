import React from "react";
import oImg from "../../../assets/Correct_answer.png";
import styled, { keyframes } from "styled-components";
import { media } from "../../../styles/MideaQuery";

export default function CorrectAnswerModal() {
  return (
    <>
      <OImg />
      <BackGround></BackGround>
    </>
  );
}

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 20;
`;
const shake = keyframes`
0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  
`;
const OImg = styled.div`
  width: 40rem;
  height: 36rem;
  animation: ${shake} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  background-size: cover;
  background-image: url(${oImg});
  position: absolute;
  left: 22%;
  top: 20%;
  z-index: 999;
  ${media.large`
    left: 35%;
    top: -50%;
  `}
  ${media.medium`
    left: 25%;
    top: -50%;
  `}
  ${media.small`
    left: 15%;
    top: -50%;
  `}
  ${media.xsmall`
    width: 31rem;
  height: 27rem;
    left: 5%;
    top: -30%;
  `}
`;
