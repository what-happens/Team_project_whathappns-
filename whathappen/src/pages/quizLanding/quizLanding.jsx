import styled from "styled-components";
import quizImage from "../../assets/quiz_logo.png";
import backgroundImage from "../../assets/quiz_landing.png";
import { Select } from "./components/SelectBox";
import { Link } from "react-router-dom";
import { media } from "../../styles/MideaQuery";

const QuizLandingMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  ${media.medium`
    background-image: none;
`}
`;

const QuizLogo = styled.img`
  width: 52.8rem;
  height: 46.2rem;
  margin-top: 6.5rem;

  ${media.medium`

    width: 46.8rem;
  height: 40.2rem;

`}
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
  width: 20.9rem;
  height: 7.8rem;
  border-radius: 30px;
  margin-top: 1.3rem;
  margin-bottom: 7.8rem;
  border: none;
  font-size: 3rem;
  font-family: gmar;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: #fff;
  background-color: ${(props) => props.backgroundColor};

  ${media.medium`

    width: 16.9rem;
    height: 7.8rem;
    font-size: 2.5rem;

`}
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
        <Link to="/mypage">
          <QuizControlButton backgroundColor="#FF2E62;">
            뒤로가기
          </QuizControlButton>
        </Link>
      </QuizControlSection>
    </QuizLandingMain>
  );
}
