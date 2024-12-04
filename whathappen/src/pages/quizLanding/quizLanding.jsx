import styled from "styled-components";
import quizImage from "../../assets/quiz_logo.png";
import backgroundImage from "../../assets/quiz_landing.png";
import { Select } from "./components/SelectBox";

const LandingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const QuizLandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const QuizLogo = styled.img`
  width: 50rem;
  height: 40.2rem;
  margin-top: 5rem;
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
  width: 20rem;
  height: 6rem;
  border-radius: 2rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  border: none;
  font-size: 3rem;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
`;

export default function QuizLanding() {
  return (
    <LandingBackground>
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
    </LandingBackground>
  );
}
