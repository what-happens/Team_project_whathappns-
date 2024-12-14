import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Stamps from "./components/Stamps";
import { media } from "../../styles/MideaQuery";
import backGround from "../../assets/review-background-2.svg";

export default function MyPage() {
  return (
    <Background>
      <MyPageContents>
        <header>
          <h1 className="sr-only">마이페이지</h1>
          <GreetingMsg>
            <span className="greetings">안녕하세요, 오르미</span>
            <span style={{ color: "white" }}> 고객님!</span>
          </GreetingMsg>
        </header>

        <StatusContents>
          <h2 className="sr-only">학습 현황</h2>
          <StatusBox>
            <StatusVal>1 stage</StatusVal>
            <StatusLabel>기초학습</StatusLabel>
          </StatusBox>
          <Division />
          <StatusBox>
            <StatusVal>10회</StatusVal>
            <StatusLabel>퀴즈풀이</StatusLabel>
          </StatusBox>
          <Division />
          <StatusBox>
            <StatusVal>29개</StatusVal>
            <StatusLabel>저장된 퀴즈</StatusLabel>
          </StatusBox>
        </StatusContents>

        <CourseContents>
          <StampContents>
            <h2>Stamp</h2>
            <h2 className="sr-only">스탬프 북</h2>
            <Stamps />
          </StampContents>

          <ProgressContents>
            <h2 style={{ color: "var(--main-color)" }}>기초학습 진척도</h2>
            <CircularProgressbar
              value={20}
              text={`20%`}
              background={true}
              styles={{
                root: {
                  maxHeight: "300px",
                  maxWidth: "300px",
                  minHeight: "220px",
                  minWidth: "220px",
                },
                path: {
                  stroke: `var(--main-color)`,
                },
                text: {
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  fill: "var(--main-color)",
                },
                background: {
                  fill: "white",
                },
              }}
            />
          </ProgressContents>
        </CourseContents>
      </MyPageContents>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -999;
  background-image: url(${backGround});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.medium`
    background-size: cover; 
    height: 100%; 
  `}

  ${media.small`
    background-size: cover; 
    height: 100%; 
  `}
`;
const MyPageContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 80vw;
  margin: 8rem auto;
  padding: 3rem 1rem 3rem 1rem;
  ${media.medium`
    margin-top: 1rem;
  `}
`;

const GreetingMsg = styled.div`
  font-size: 4.8rem;
  font-weight: 500;
  .greetings {
    font-weight: 900;
    color: white;
  }
  br {
    display: none;
  }
  ${media.medium`
    br{
      display: inline-block;
    }
  `}
`;

const StatusContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 2.4rem;
  width: 100%;
  height: 21.5rem;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin: 3rem 0;
  border-radius: 2rem;

  ${media.medium`
    min-width: 66rem;
  `}
`;

const StatusBox = styled.div`
  font-size: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const StatusVal = styled.div`
  font-weight: 900;
`;

const StatusLabel = styled.h3`
  font-weight: 500;
`;

const Division = styled.div`
  height: 12.4rem;
  width: 1px;
  background-color: #c4c4c4;
`;

const CourseContents = styled.section`
  display: flex;
  gap: 1rem;

  h2 {
    align-self: flex-start;
    color: white;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ${media.medium`
    flex-direction: column;
  `}
`;

const StampContents = styled.section`
  flex: 1;
`;

const ProgressContents = styled.section`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: white;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  ${media.medium`
    min-width: 66rem;
  `}
`;
