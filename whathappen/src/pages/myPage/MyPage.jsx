import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Stamps from "./components/Stamps";
import { media } from "../../styles/MideaQuery";

const MyPageContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 130rem;
  margin: 5rem auto;
`;
const GreetingMsg = styled.div`
  font-size: 48px;
  font-weight: 400;
  ${media.medium`
  `}
`;
const StatusContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 2.4rem;
  height: 21.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 0px;
  margin: 3rem 0;

  ${media.medium`
    max-width: 66.2rem;
    height: 21.5rem;
`}
`;
const StatusBox = styled.div`
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
const StatusVal = styled.div`
  font-weight: bold;
`;

const StatusLabel = styled.h3``;

const Title = styled.h2`
  font-size: 4rem;
  color: var(--main-color);
  font-weight: bold;
`;
const CourseContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 0;
  gap: 5rem;
  ${media.medium`
    flex-direction: column;
  `}
`;

export default function MyPage() {
  return (
    <MyPageContents>
      <header>
        <h1 className="sr-only">마이페이지</h1>
        <GreetingMsg>안녕하세요, <br className="mobile-only"/>오르미 고객님</GreetingMsg>
      </header>

      <StatusContents>
        <StatusBox>
          <StatusVal>1 stage</StatusVal>
          <StatusLabel>기초학습</StatusLabel>
        </StatusBox>
        <StatusBox>
          <StatusVal>10회</StatusVal>
          <StatusLabel>퀴즈풀이</StatusLabel>
        </StatusBox>
        <StatusBox>
          <StatusVal>29개</StatusVal>
          <StatusLabel>저장된 퀴즈</StatusLabel>
        </StatusBox>
      </StatusContents>

      <Title>Course</Title>
      <CourseContents>
        <Stamps />
        <CircularProgressbar
          value={20}
          text={`20%`}
          styles={{
            root: { height: "300px", width: "300px" },
          }}
        />
      </CourseContents>
    </MyPageContents>
  );
}
