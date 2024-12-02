import styled, { css } from "styled-components";
import logoImage from "../../assets/img/logo.png";
import ConfirmExitModal from "./components/confirmModal";
import CongratulationsModal from "./components/congratsModal";
import { useState } from "react";

const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

const QuizResultMain = styled.main`
  width: 747px;
  height: 799px;
  border-radius: 50px;
  margin: 167px auto 114px;
  box-shadow: 2px 4px 4px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 346px;
  height: 85px;
  margin-bottom: 72px;
`;

const QuizResultSection = styled.section`
  width: 550px;
  border-bottom: 0.5px solid #c4c4c4;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

const QuizResultMessage = styled.div`
  width: 334px;
  height: 85px;
  background-color: #2e5dff;
  border-radius: 20px;
  color: #fff;
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailHeading = styled.h2`
  ${srOnly}
`;

const resultTitles = ["전체 문제", "맞힌 문제", "틀린 문제"];
const resultData = [10, 8, 2];

const ResultContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 57px;
  margin-top: 26px;
`;

const ResultItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const resultItemCommon = css`
  height: 60px;
  display: flex;
  align-items: center;
`;
const ResultTypes = styled.div`
  font-size: 25px;
  ${resultItemCommon}
`;

const ResultCount = styled.div`
  font-size: 40px;
  font-weight: 500;
  ${resultItemCommon}
  margin-bottom: 96px;
`;

const ResultControlSection = styled.section`
  display: flex;
  gap: 20px;
`;

const ControlHeading = styled.h2`
  ${srOnly}
`;

const ResultControlButton = styled.button`
  width: 157px;
  height: 46px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  font-size: 20px;
`;

export default function QuizResult() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false); // 종료 확인 모달 상태
  const [isCongratulationsModalOpen, setCongratulationsModalOpen] =
    useState(false); // 축하 모달 상태

  // 모달 닫는 함수들
  const closeConfirmModal = () => setConfirmModalOpen(false);
  const closeCongratulationsModal = () => setCongratulationsModalOpen(false);

  return (
    <QuizResultMain>
      <header>
        <h1>
          <Logo src={logoImage} alt="이게되네 로고"></Logo>
        </h1>
      </header>
      <QuizResultSection>
        <h2 style={{ fontSize: "50px" }}>퀴즈 결과!</h2>
        <QuizResultMessage>8 문제 정답!</QuizResultMessage>
      </QuizResultSection>
      <section>
        <DetailHeading>퀴즈 결과 상세보기</DetailHeading>
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
        <ControlHeading>결과 처리 액션을 선택하세요</ControlHeading>
        <ConfirmExitModal
          isOpen={isConfirmModalOpen}
          onClose={closeConfirmModal} // 종료 모달 닫기
        />
        <CongratulationsModal
          isOpen={isCongratulationsModalOpen}
          onClose={closeCongratulationsModal} // 축하 모달 닫기
        />
        <ResultControlButton
          backgroundColor="#2E5DFF"
          onClick={() => setConfirmModalOpen(true)} // 종료 확인 모달 열기
        >
          처음으로
        </ResultControlButton>
        <ResultControlButton
          backgroundColor="#FF2E62"
          onClick={() => setCongratulationsModalOpen(true)} // 축하 모달 열기
        >
          복습 노트 저장
        </ResultControlButton>
      </ResultControlSection>
    </QuizResultMain>
  );
}
