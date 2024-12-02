import styled, { css } from "styled-components";
import logoImage from "../assets/img/logo.png";
import congratsImg from "../assets/img/congratulations.png";
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

const QuizResultHeader = styled.header``;

const QuizResultTitle = styled.h1``;

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

const ResultHeading = styled.h2`
  font-size: 50px;
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

const ResultDetailSection = styled.section``;

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
  font-size: ${(props) => props.fontSize};
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

// 축하모달창
const CongratsImg = styled.img`
  margin-bottom: 39px;
`;

const SaveMessage = styled.p`
  font-size: 26px;
  font-weight: 500;
  width: 315px;
  text-align: center;
  margin-bottom: 19px;
`;

const MyPageMessage = styled.p`
  font-size: 18px;
  font-weight: 300;
  width: 275px;
  text-align: center;
  margin-bottom: 57px;
`;
const GotoMyPage = styled.button`
  width: 183px;
  height: 46px;
  border-radius: 20px;
  background-color: #2e5dff;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

const CongratulationsModal = styled.dialog`
  width: 490px;
  height: 376px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
`;

//종료여부 모달창
const ConfirmExitMessage = styled.p`
  font-size: 24px;
  font-weight: 300;
  width: 344px;
  margin: 24px;
`;

const ButtonType = styled.div`
  display: flex;
  gap: 18px;
`;

const YesOrNo = styled.button`
  width: 113px;
  height: 46px;
  border-radius: 20px;
  color: #fff;
  font-weight: 400;
  background: #2e5dff;
  border: none;
`;

const ConfirmExitModal = styled.dialog`
  width: 490px;
  height: 226px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function quizResult() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <QuizResultMain>
      <QuizResultHeader>
        <QuizResultTitle>
          <Logo src={logoImage} alt="이게되네 로고"></Logo>
        </QuizResultTitle>
      </QuizResultHeader>
      <QuizResultSection>
        <ResultHeading>퀴즈 결과!</ResultHeading>
        <QuizResultMessage>8 문제 정답!</QuizResultMessage>
      </QuizResultSection>
      <ResultDetailSection>
        <DetailHeading>퀴즈 결과 상세보기</DetailHeading>
        <ResultContainer>
          {resultTitles.map((title, index) => (
            <ResultItem key={index}>
              <ResultTypes>{title}</ResultTypes>
              <ResultCount>{resultData[index]} 문제</ResultCount>
            </ResultItem>
          ))}
        </ResultContainer>
      </ResultDetailSection>
      <ResultControlSection>
        <ControlHeading>결과 처리 액션을 선택하세요</ControlHeading>
        <ConfirmExitModal open={isModalOpen}>
          <ConfirmExitMessage>
            진행 데이터는 저장되지 않습니다 정말로 종료하시겠습니까?
          </ConfirmExitMessage>
          <ButtonType>
            <YesOrNo>예</YesOrNo>
            <YesOrNo>아니요</YesOrNo>
          </ButtonType>
        </ConfirmExitModal>
        <ResultControlButton
          backgroundColor="#2E5DFF"
          onClick={() => setModalOpen(true)}
        >
          처음으로
        </ResultControlButton>
        <CongratulationsModal open={isModalOpen}>
          <CongratsImg src={congratsImg}></CongratsImg>
          <SaveMessage>
            틀린문제와 북마크한 문제를 복습 노트에 저장했습니다!
          </SaveMessage>
          <MyPageMessage>
            마이페이지에서 복습 노트에 저장된 문제들을 복습해보아요!!
          </MyPageMessage>
          <GotoMyPage>마이페이지로 이동</GotoMyPage>
        </CongratulationsModal>
        <ResultControlButton
          backgroundColor="#FF2E62"
          onClick={() => setModalOpen(true)}
        >
          복습 노트 저장
        </ResultControlButton>
      </ResultControlSection>
    </QuizResultMain>
  );
}
