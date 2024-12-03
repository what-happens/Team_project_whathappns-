import styled from "styled-components";
// import React, { useEffect } from "react";
import quizImage from "../assets/img/quiz_logo.png";
import backgroundImage from "../assets/img/quiz_randing.png";

const QuizLandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const QuizLandingHeader = styled.header``;

const QuizLogo = styled.img`
  width: 648px;
  height: 582px;
  margin-top: 65px;
`;

const QuizLandingTitle = styled.h1``;

const QuizOptionsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const QuizControlSection = styled.section`
  display: flex;
  gap: 22px;
`;

const PageHeading = styled.h2`
  /* sr-only */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
  /* sr-only */
`;

const QuizSelectBox = styled.select`
  width: 418px;
  height: 101px;
`;

const Option = styled.option``;

const QuizControlButton = styled.button`
  width: 249px;
  height: 78px;
  border-radius: 30px;
  margin-top: 13px;
  margin-bottom: 78px;
  border: none;
  font-size: 40px;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
`;

const quizTypes = ["HTML", "CSS"];
const questionCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function QuizLanding() {
  return (
    <QuizLandingMain>
      <QuizLandingHeader>
        <QuizLandingTitle>
          <QuizLogo src={quizImage} alt="퀴즈 이미지"></QuizLogo>
        </QuizLandingTitle>
      </QuizLandingHeader>
      <QuizOptionsSection>
        <PageHeading>퀴즈 유형을 선택하세요</PageHeading>
        <QuizSelectBox>
          {quizTypes.map((type, index) => (
            <Option key={index}>{type}</Option>
          ))}
        </QuizSelectBox>
        <QuizSelectBox>
          {questionCount.map((count, index) => (
            <Option key={index}>{count}문제</Option>
          ))}
        </QuizSelectBox>
      </QuizOptionsSection>
      <QuizControlSection>
        <PageHeading>퀴즈를 풀어보세요</PageHeading>
        <QuizControlButton fontWeight="600" backgroundColor="#2E5DFF;">
          퀴즈 풀기!
        </QuizControlButton>
        <QuizControlButton backgroundColor="#FF2E62;">
          뒤로가기
        </QuizControlButton>
      </QuizControlSection>
    </QuizLandingMain>
  );
}
