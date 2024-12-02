import styled from "styled-components";
import quizImage from "../../assets/img/quiz_logo.png";
import backgroundImage from "../../assets/img/quiz_randing.png";
import { Select } from "./components/SelectBox";

const QuizLandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const QuizLogo = styled.img`
  width: 64.8rem;
  height: 58.2rem;
  margin-top: 6.5rem;
`;

const QuizOptionsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const QuizControlSection = styled.section`
  display: flex;
  gap: 2.2rem;
`;

const QuizControlButton = styled.button`
  width: 24.9rem;
  height: 7.8rem;
  border-radius: 30px;
  margin-top: 1.3rem;
  margin-bottom: 7.8rem;
  border: none;
  font-size: 4rem;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
`;

export default function QuizLanding() {
  return (
    <QuizLandingMain>
      <header>
        <h1>
          <QuizLogo src={quizImage} alt="퀴즈 이미지"></QuizLogo>
        </h1>
      </header>
      <QuizOptionsSection>
        <h2 className="sr-only">퀴즈 유형을 선택하세요</h2>

        <Select></Select>
      </QuizOptionsSection>
      <QuizControlSection>
        <h2 className="sr-only">퀴즈를 풀어보세요</h2>
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
