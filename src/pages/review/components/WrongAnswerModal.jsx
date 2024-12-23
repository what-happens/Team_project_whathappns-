import React from "react";
import xImg from "../../../assets/wrong_answer.png";
import styled, { keyframes } from "styled-components";
import { media } from "../../../styles/MideaQuery";

export default function WrongAnswerModal() {
  return (
    <>
      <XImg />
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
0%,
100% {
          transform: rotate(0deg);
          transform-origin: 50% 50%;
}
10% {
          transform: rotate(8deg);
}
20%,
40%,
60% {
          transform: rotate(-10deg);
}
30%,
50%,
70% {
          transform: rotate(10deg);
}
80% {
          transform: rotate(-8deg);
}
90% {
          transform: rotate(8deg);
}
  
`;
const XImg = styled.div`
  width: 40rem;
  height: 36rem;
  animation: ${shake} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  background-size: cover;
  background-image: url(${xImg});
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
