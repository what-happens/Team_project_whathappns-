import styled, { keyframes } from "styled-components";
import quizImage from "../../assets/quiz-main-logo.png";
import backgroundImage from "../../assets/quiz-page-background3.svg";
import { Select } from "./components/SelectBox";
import { media } from "../../styles/MideaQuery";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const bounceImg = keyframes`
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1; 
  }
`;

const LandingBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  padding-bottom: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.medium`
    position: absolute;
    background-image: none;
  `}
`;

const QuizLandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const QuizLogo = styled.img`
  width: 50rem;
  height: 100%;
  opacity: 0;
  animation: ${bounceImg} 0.6s ease-out both;

  ${media.medium`
    width: 45rem;
    height: 100%;
  `}
  ${media.small`
    width: 40rem;
    height: 100%;
  `}
`;

const QuizOptionsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const QuizControlSection = styled.section`
  display: flex;
  gap: 2.2rem;
  & > button,
  & > a > button {
    ${media.medium`
      font-size: 2.5rem;
      width: 18rem;
    `}
    ${media.small`
      width: 11rem;
      font-size: 1.5rem;
      padding: 0.8rem 1.2rem;
      border-radius: 1.6rem;
    `}
  }
`;

export default function QuizLanding({ onNext }) {
  const navigate = useNavigate();

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
          <Button
            backgroundColor="white"
            color="green"
            padding="2rem 5rem"
            borderRadius="2.5rem"
            onClick={onNext}
          >
            퀴즈 풀기!
          </Button>

          <Button
            onClick={() => navigate(-1)}
            backgroundColor="red"
            padding="2rem 5rem"
            borderRadius="2.5rem"
          >
            뒤로가기
          </Button>
        </QuizControlSection>
      </QuizLandingMain>
    </LandingBackground>
  );
}

QuizLanding.propTypes = {
  onNext: PropTypes.func.isRequired,
};
