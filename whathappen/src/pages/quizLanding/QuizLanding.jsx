import styled from "styled-components";
import quizImage from "../../assets/quiz_logo.png";
import backgroundImage from "../../assets/quiz_landing.png";
import { Select } from "./components/SelectBox";
import { media } from "../../styles/MideaQuery";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LandingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 998;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
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
  width: 58rem;
  height: 53rem;
  ${media.medium`
    width: 51rem;
    height: 46rem;
`}
  ${media.small`
    width: 37rem;
    height: 33rem;
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
    width:18rem
`}
    ${media.small`
      width: 11rem;
    font-size: 1.5rem;
    padding:0.8rem 1.2rem;
    border-radius:1.6rem
`}
  }
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
            fontSize="4rem"
            padding="2rem 3rem"
            borderRadius="2.5rem"
            onClick={onNext}
          >
            퀴즈 풀기!
          </Button>
          <Link to="/">
            <Button
              backgroundColor="red"
              fontSize="4rem"
              padding="2rem 3rem"
              borderRadius="2.5rem"
            >
              뒤로가기
            </Button>
          </Link>
        </QuizControlSection>
      </QuizLandingMain>
    </LandingBackground>
  );
}

QuizLanding.propTypes = {
  onNext: PropTypes.func.isRequired,
};
