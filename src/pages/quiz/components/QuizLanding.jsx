import styled, { keyframes } from "styled-components";
import quizImage from "../../../assets/quiz-main-logo.png";
import backgroundImage from "../../../assets/quiz-page-background3.svg";
import { Select } from "./Select";
import { media } from "../../../styles/MideaQuery";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import {
  Category as Categories,
  Limits,
} from "../../../constants/quizConstants";
import { useState, useRef, useEffect } from "react";
import useFetchQuiz from "../../../hooks/useFetchQuiz";
import useQuizOptions from "../../../hooks/useQuizOptions";
import useQuizStep from "../../../hooks/useQuizStep";
import LoadingPotato from "../../../components/LoadingPotato";
import { useSelector } from "react-redux";

export default function QuizLanding() {
  const [openSelectIndex, setOpenSelectIndex] = useState(null); // 열린 Select의 인덱스를 저장
  const selectRefs = useRef([]); // Select refs 배열 생성
  const { moveNext } = useQuizStep();
  const { getQuiz } = useFetchQuiz();
  const { selectCategory, selectLimit } = useQuizOptions();
  const categoryEntries = Object.entries(Categories);
  const limitEntries = Object.entries(Limits);
  const { isLoading } = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  const onClickQuizStart = async () => {
    try {
      await getQuiz();
      moveNext();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectOpen = (index) => {
    setOpenSelectIndex((prev) => (prev === index ? null : index));
  };

  // 바깥 클릭 감지 이벤트
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 클릭한 요소가 어떤 Select에도 속하지 않는 경우
      if (
        openSelectIndex !== null &&
        selectRefs.current[openSelectIndex] &&
        !selectRefs.current[openSelectIndex].contains(event.target)
      ) {
        setOpenSelectIndex(null); // Select 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSelectIndex]);

  return (
    <>
      {isLoading && <LoadingPotato />}
      <LandingBackground>
        <QuizLandingMain>
          <header>
            <h1>
              <QuizLogo src={quizImage} alt="퀴즈 이미지"></QuizLogo>
            </h1>
          </header>
          <QuizOptionsSection>
            <h2 className="sr-only">퀴즈 유형을 선택하세요</h2>
            <Select
              index={0}
              options={categoryEntries}
              onSelectOption={selectCategory}
              isOpen={openSelectIndex === 0}
              onSelectOpen={handleSelectOpen}
              ref={(el) => (selectRefs.current[0] = el)} // ref 설정
            />
            <Select
              index={1}
              options={limitEntries}
              onSelectOption={selectLimit}
              isOpen={openSelectIndex === 1}
              onSelectOpen={handleSelectOpen}
              ref={(el) => (selectRefs.current[1] = el)} // ref 설정
            />
          </QuizOptionsSection>
          <QuizControlSection>
            <h2 className="sr-only">퀴즈를 풀어보세요</h2>

            <Button
              onClick={() => navigate(-1)}
              backgroundColor="red"
              padding="2rem 5rem"
              borderRadius="2.5rem"
            >
              뒤로가기
            </Button>
            <Button
              backgroundColor="white"
              color="green"
              padding="2rem 5rem"
              borderRadius="2.5rem"
              onClick={onClickQuizStart}
              disable={isLoading}
            >
              퀴즈 풀기!
            </Button>
          </QuizControlSection>
        </QuizLandingMain>
      </LandingBackground>
    </>
  );
}

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
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.medium`
    position: absolute;

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
    width: 36rem;
  `}

  ${media.xsmall`
    width: 28rem;
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
      font-size: 1.8rem;
      width: 16rem;
      padding: 1.5rem 1.8rem;
      border-radius: 2rem;
    `}
    ${media.small`
      width: 13rem;
      font-size: 1.6rem;
      padding: 1rem 1.6rem;
      border-radius: 1.7rem;
    `}
    ${media.xsmall`
    width: 10.5rem;
    font-size: 1.4rem;
      padding: 0.5rem 1.3rem;
      border-radius: 1.4rem;
  `}
  }
`;
