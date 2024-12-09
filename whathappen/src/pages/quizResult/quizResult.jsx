import styled, { css } from "styled-components";
import logoImage from "../../assets/logo.png";
import ConfirmExitModal from "./components/ConfirmModal";
import CongratulationsModal from "./components/CongratsModal";
import { media } from "../../styles/MideaQuery";
import Button from "../../components/Button";
import { useState } from "react";

const Center = styled.css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
`;

const ResultBackground = styled.div`
  background-color: var(--main-color);
  ${Center};
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
  ${Center};
  background-color: #fff;
  ${media.medium`
    width: 52rem;
    height: 54rem;
    border-radius: 4rem;
`}
`;

const Logo = styled.img`
  width: 30rem;
  height: 7.2rem;
  margin-bottom: 6rem;
  ${media.medium`
    width: 25rem;
    height: 6.4rem;
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
`;

const QuizResultTitle = styled.h2`
  font-size: 4.2rem;
  ${media.medium`
    font-size: 3.2rem;
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
    width: 23rem;
    height: 6rem;
    border-radius: 1.5rem;
    font-size: 3rem;
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
`;

const ResultTypes = styled.div`
  font-size: 2rem;
  ${resultItemCommon}
  ${media.medium`
    font-size: 1.5rem;
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
`;

const ResultControlSection = styled.section`
  display: flex;
  gap: 2rem;
`;

export default function QuizResult() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isCongratulationsModalOpen, setCongratulationsModalOpen] =
    useState(false);

  const closeConfirmModal = () => setConfirmModalOpen(false);
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
          <ConfirmExitModal
            isOpen={isConfirmModalOpen}
            onClose={closeConfirmModal}
          />
          <CongratulationsModal
            isOpen={isCongratulationsModalOpen}
            onClose={closeCongratulationsModal}
          />
          <Button width="16rem" onClick={() => setConfirmModalOpen(true)}>
            처음으로
          </Button>
          <Button
            width="16rem"
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
