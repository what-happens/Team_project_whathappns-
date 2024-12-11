import styled, { css } from "styled-components";
import logoImage from "../../assets/logo.png";
import CongratulationsModal from "./components/CongratsModal";
import { media } from "../../styles/MideaQuery";
import Button from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import backGround from "../../assets/quiz-result_background.svg";

const ResultBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 999;
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
const QuizResultMain = styled.main`
  width: 63rem;
  height: 67rem;
  border-radius: 5rem;
  box-shadow: 2px 4px 4px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  ${media.medium`
    width: 52rem;
    height: 54rem;
    border-radius: 4rem;
`}
  ${media.small`
    width: 38rem;
    height: 40rem;
    border-radius: 2.7rem;
`}
`;

const Logo = styled.img`
  width: 30rem;
  height: 7.2rem;
  margin-bottom: 6rem;
  ${media.medium`
    width: 25rem;
    height: 6.4rem;
    margin-bottom: 4rem;
`}
  ${media.small`
    width: 19rem;
    height: 5rem;
    margin-bottom: 3rem;
  `}
`;

const QuizResultSection = styled.section`
  width: 48rem;
  border-bottom: 0.5px solid #c4c4c4;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;

  ${media.medium`
    width: 38rem;
`}
  ${media.small`
    width: 27rem; 
    gap: 1.2rem; 
    padding-bottom: 2.8rem;
  `}
`;

const QuizResultTitle = styled.h2`
  font-size: 4.2rem;
  ${media.medium`
    font-size: 3.6rem;
`}
  ${media.small`
    font-size: 2.8rem;
`}
`;

const correctAnswerCount = 8;

const QuizResultMessage = styled.div`
  width: 28rem;
  height: 7rem;
  background-color: var(--main-color);
  border-radius: 2rem;
  color: #fff;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.medium`
    width: 23.7rem;
    height: 6rem;
    border-radius: 1.5rem;
    font-size: 3rem;
`}
  ${media.small`
    width: 17rem;
    height: 4.5rem;
    font-size: 2.2rem;
    border-radius: 1.2rem;
`}
`;

const resultTitles = ["전체 문제", "맞힌 문제", "틀린 문제"];
const resultData = [10, 8, 2];

const ResultContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
  margin-top: 2rem;
  ${media.medium`
    gap: 3rem;
`}
`;

const ResultItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const resultItemCommon = css`
  height: 5rem;
  display: flex;
  align-items: center;

  ${media.medium`
    height: 4rem;
`}
  ${media.small`
    height: 2.4rem;
`}
`;

const ResultTypes = styled.div`
  font-size: 2rem;
  font-weight: 400;
  ${resultItemCommon}
  ${media.medium`
    font-size: 1.5rem;
`}
  ${media.small`
    font-size: 1rem;
`}
`;

const ResultCount = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  ${resultItemCommon}
  margin-bottom: 8rem;
  ${media.medium`
    font-size: 2.7rem;
    margin-bottom: 5rem;
`}
  ${media.small`
    font-size: 1.8rem;
    margin-bottom: 3rem;
`}
`;

const ResultControlSection = styled.section`
  display: flex;
  gap: 2rem;

  & > button,
  & > a > button {
    width: 17rem;
    ${media.medium`
    font-size: 1.6rem;
    padding:0.5rem 1.6rem;
    width:14rem
`}
    ${media.small`
      width: 9rem;
    font-size: 1rem;
    padding:0.05rem 1.2rem;
`}
  }
`;

export default function QuizResult() {
  const [isCongratulationsModalOpen, setCongratulationsModalOpen] =
    useState(false);
  const closeCongratulationsModal = () => setCongratulationsModalOpen(false);

  return (
    <ResultBackground>
      <QuizResultMain>
        <header>
          <h1>
            <Logo src={logoImage} alt="이게되네 로고"></Logo>
          </h1>
        </header>
        <QuizResultSection>
          <QuizResultTitle>퀴즈 결과!</QuizResultTitle>
          <QuizResultMessage>
            {" "}
            {correctAnswerCount} 문제 정답!
          </QuizResultMessage>
        </QuizResultSection>
        <section>
          <h2 className="sr-only">퀴즈 결과 상세보기</h2>
          <ResultContainer>
            {resultTitles.map((title, index) => (
              <ResultItem key={index}>
                <ResultTypes>{title}</ResultTypes>
                <ResultCount>{resultData[index]} 문제</ResultCount>
              </ResultItem>
            ))}
          </ResultContainer>
        </section>
        <ResultControlSection>
          <h2 className="sr-only">결과 처리 액션을 선택하세요</h2>
          <CongratulationsModal
            isOpen={isCongratulationsModalOpen}
            onClose={closeCongratulationsModal}
          />
          <Link to="/myPage">
            <Button>처음으로</Button>
          </Link>
          <Button
            backgroundColor="red"
            onClick={() => setCongratulationsModalOpen(true)}
          >
            복습 노트 저장
          </Button>
        </ResultControlSection>
      </QuizResultMain>
    </ResultBackground>
  );
}
