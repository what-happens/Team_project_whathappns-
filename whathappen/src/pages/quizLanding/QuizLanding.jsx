import styled from "styled-components";
import quizImage from "../../assets/quiz_logo.png";
import backgroundImage from "../../assets/quiz_landing.png";
import { Select } from "./components/SelectBox";
import { media } from "../../styles/MideaQuery";
import Button from "../../components/Button";
import PropTypes from "prop-types";

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
  height: 100%;

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

export default function QuizLanding({ onNext }) {
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
            width="24.9rem"
            fontSize="3rem"
            padding="2rem 3rem"
            borderRadius="2.5rem"
            onClick={onNext}
          >
            퀴즈 풀기!
          </Button>
          <Button
            width="24.9rem"
            backgroundColor="red"
            fontSize="3rem"
            padding="2rem 3rem"
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
