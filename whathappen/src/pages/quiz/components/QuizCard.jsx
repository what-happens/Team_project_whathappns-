import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import QuizProgress from "./QuizProgress";
import Button from "../../../components/Button";
import Bookmark from "../../../components/Bookmark";
import { media } from "../../../styles/MideaQuery";
import useQuizStep from "../../../hooks/useQuizStep";
import { useSelector } from "react-redux";

export default function QuizCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { moveNext } = useQuizStep();
  const { quiz } = useSelector((state) => state.quiz);
  const isLastQuestion = currentQuestion === quiz.length - 1;

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentQuestion === quiz.length - 1) {
      moveNext();
    }
  };

  return (
    <QuizSection>
      <Bookmark top={"-4.5rem"} right={"7.2rem"} />
      <QuestionNumber>
        문제
        <span>
          {currentQuestion + 1} / {quiz.length}
        </span>
      </QuestionNumber>
      <QuizProgress
        currentQuestionNumber={currentQuestion + 1}
        totalQuestionNumber={quiz.length}
      />
      <QuizQuestion>{quiz[currentQuestion].question}</QuizQuestion>
      <FormWrapper onSubmit={handleSubmit}>
        {quiz[currentQuestion].answers.map((answer, idx) => (
          <QuizInputWrapper key={`${quiz[currentQuestion].id}-${idx}`}>
            <input
              type="radio"
              name="answer"
              id={`${quiz[currentQuestion].id}-${idx}`}
              required
            />
            <label htmlFor={`${quiz[currentQuestion].id}-${idx}`}>
              {answer}
            </label>
          </QuizInputWrapper>
        ))}
        <ButtonWrapper $buttonCount={currentQuestion === 0 ? "one" : "many"}>
          {currentQuestion !== 0 && (
            <Button type="button" onClick={handlePrev}>
              이전문제
            </Button>
          )}
          {isLastQuestion ? (
            <Button type="submit" backgroundColor={"green"}>
              제출하기
            </Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              다음문제
            </Button>
          )}
        </ButtonWrapper>
      </FormWrapper>
    </QuizSection>
  );
}

const bounce = keyframes`
   0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const QuizSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  background-color: #fff;
  padding: 3.5rem 8rem;
  position: relative;
  animation: ${bounce} 1.11s both;
  background-color: white;
  ${media.medium`
    width:80%;
    height:80%;
  `}
`;

const QuestionNumber = styled.p`
  font-size: 4rem;
  line-height: 5rem;
  text-align: center;
  margin-bottom: 2rem;
  span {
    display: block;
    font-weight: bolder;
  }
  ${media.medium`
    font-size: 3rem;
  `}
`;

const QuizQuestion = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  font-size: 4rem;
  line-height: 5rem;
  ${media.medium`
    font-size: 3rem;
  `}
  ${media.small`
    font-size: 2.3rem;
  `}
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  line-height: 3rem;
`;

const QuizInputWrapper = styled.div`
  width: 100%;
  input[type="radio"] {
    display: none;
  }

  label {
    text-align: center;
    display: block;
    width: 100%;
    padding: 2.8rem 0;
    border-radius: 2rem;
    border: 1px solid #2e5dff;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background-color: #2e5dff;
    color: white;
  }

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$buttonCount === "one" ? "flex-end" : "space-between"};
  width: 100%;
  margin-top: 2.75rem;
  gap: 1.5rem;
`;

/* QuizCard.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}; */
