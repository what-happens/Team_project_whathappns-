import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "../styles/MideaQuery";
import loadingImg from "../assets/loading_Img.svg";

export default function LoadingPotato() {
  return (
    <>
      <LoadingImg />
      <LoadingText>Loading...</LoadingText>
      <LoadingPage></LoadingPage>
    </>
  );
}

const roll = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingImg = styled.div`
  background-image: url(${loadingImg});
  position: absolute;
  top: 33%;
  left: 45%;
  width: 15rem;
  height: 15rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform-origin: center center;
  animation: ${roll} 0.8s linear infinite;
  z-index: 10000;
  ${media.small`
    left: 38%;
  `}
  ${media.medium`
    left: 41%;
  `}
  ${media.xsmall`
    left: 30%;
  `}
`;

const LoadingText = styled.p`
  position: absolute;
  top: 52%;
  left: 43%;
  font-weight: 700;
  font-size: 5rem;
  z-index: 30;
  ${media.small`
    left: 30%;
  `}
  ${media.medium`
    left: 35%;
  `}
  ${media.xsmall`
    left: 15%;
  `}
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
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 20;
`;
