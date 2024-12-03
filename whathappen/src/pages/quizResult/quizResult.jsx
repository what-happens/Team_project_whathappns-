import styled, { css } from "styled-components";
import logoImage from "../../assets/logo.png";
import ConfirmExitModal from "./components/confirmModal";
import CongratulationsModal from "./components/congratsModal";
import { useState } from "react";

const Background = styled.div`
  background-color: #2e5dff;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: -1;
`;

const QuizResultMain = styled.main`
  width: 74.7rem;
  height: 79.9rem;
  border-radius: 50px;
  margin: 16.7rem auto 11.4rem;
  box-shadow: 2px 4px 4px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 34.6rem;
  height: 8.5rem;
  margin-bottom: 7.2rem;
`;

const QuizResultSection = styled.section`
  width: 55rem;
  border-bottom: 0.5px solid #c4c4c4;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
`;

const QuizResultMessage = styled.div`
  width: 33.4rem;
  height: 8.5rem;
  background-color: #2e5dff;
  border-radius: 20px;
  color: #fff;
  font-size: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const resultTitles = ["전체 문제", "맞힌 문제", "틀린 문제"];
const resultData = [10, 8, 2];

const ResultContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.7rem;
  margin-top: 2.6rem;
`;

const ResultItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const resultItemCommon = css`
  height: 6rem;
  display: flex;
  align-items: center;
`;

const ResultTypes = styled.div`
  font-size: 2.5rem;
  ${resultItemCommon}
`;

const ResultCount = styled.div`
  font-size: 4rem;
  font-weight: 700;
  ${resultItemCommon}
  margin-bottom: 9.6rem;
`;

const ResultControlSection = styled.section`
  display: flex;
  gap: 2rem;
`;

const ResultControlButton = styled.button`
  width: 15.7rem;
  height: 4.6rem;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  font-size: 2rem;
`;

export default function QuizResult() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isCongratulationsModalOpen, setCongratulationsModalOpen] =
    useState(false);

  const closeConfirmModal = () => setConfirmModalOpen(false);
  const closeCongratulationsModal = () => setCongratulationsModalOpen(false);

  return (
    <Background>
      <QuizResultMain>
        <header>
          <h1>
            <Logo src={logoImage} alt="이게되네 로고"></Logo>
          </h1>
        </header>
        <QuizResultSection>
          <h2 style={{ fontSize: "5rem" }}>퀴즈 결과!</h2>
          <QuizResultMessage>8 문제 정답!</QuizResultMessage>
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
          <ResultControlButton
            backgroundColor="#2E5DFF"
            onClick={() => setConfirmModalOpen(true)}
          >
            처음으로
          </ResultControlButton>
          <ResultControlButton
            backgroundColor="#FF2E62"
            onClick={() => setCongratulationsModalOpen(true)}
          >
            복습 노트 저장
          </ResultControlButton>
        </ResultControlSection>
      </QuizResultMain>
    </Background>
  );
}
