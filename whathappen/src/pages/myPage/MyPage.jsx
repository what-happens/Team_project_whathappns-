import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Stamps from "./components/Stamps";
import { media } from "../../styles/MideaQuery";

const MyPageContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 90vw;
  margin: 4rem auto;
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 0px;
  margin: 3rem 0;

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
  height: 8.4rem;
  width: rem;
  background-color: #c4c4c4;
`;

const CourseContents = styled.section`
  display: grid;
  grid-template-areas: "a b";
  gap: 3rem;
  h2 {
    align-self: flex-start;
    color: var(--main-color);
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  ${media.medium`
    display: grid;
    grid-template-areas: 
    "a"
    "b"
    ;
  `}
`;

const StampContents = styled.section`
  grid-area: a;
`;
const ProgressContents = styled.section`
  grid-area: b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export default function MyPage() {
  return (
    <MyPageContents>
      <header>
        <h1 className="sr-only">마이페이지</h1>
        <GreetingMsg>
          <span className="greetings">
            안녕하세요, <br />
            오르미
          </span>
          <span> 고객님</span>
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
          <h2>Course</h2>
          <h2 className="sr-only">스탬프 북</h2>
          <Stamps />
        </StampContents>

        <ProgressContents>
          <h2 className="sr-only">학습 진척도</h2>
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
                fontSize: "24px",
                fontWeight: 700,
                fill: "var(--main-color)",
              },
              background: {
                fill: "#3E3E3E",
              },
            }}
          />
        </ProgressContents>
      </CourseContents>
    </MyPageContents>
  );
}
