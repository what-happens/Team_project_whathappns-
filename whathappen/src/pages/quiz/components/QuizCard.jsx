import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QuizProgress from "./QuizProgress";
import Button from "../../../components/Button";
import Bookmark from "../../../components/Bookmark";
import { media } from "../../../styles/MideaQuery";

export default function QuizCard({ quizzes, onNext }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledAnswer, setShuffledAnswer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const shuffleArray = (arr) => {
    const newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onNext(); // 제출 후 부모에게 onNext 호출하여 퀴즈 결과 페이지로 이동
  };

  useEffect(() => {
    const shuffled = quizzes.map((quiz) =>
      shuffleArray([...quiz.incorrect_answer, quiz.correct_answer])
    );
    setShuffledAnswer(shuffled);
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return <div>loading</div>;
  }

  return (
    <QuizSection>
      <Bookmark top={"-4.5rem"} right={"7.2rem"} />
      <QuestionNumber>
        문제
        <span>
          {currentQuestion + 1} / {quizzes.length}
        </span>
      </QuestionNumber>
      <QuizProgress
        currentQuestionNumber={currentQuestion + 1}
        totalQuestionNumber={quizzes.length}
      />
      <QuizQuestion>{quizzes[currentQuestion].question}</QuizQuestion>
      <FormWrapper onSubmit={handleOnSubmit}>
        {shuffledAnswer[currentQuestion].map((answer, idx) => {
          return (
            <QuizInputWrapper key={idx}>
              <input type="radio" name="answer" id={`answer-${idx}`} />
              <label htmlFor={`answer-${idx}`}>{answer}</label>
            </QuizInputWrapper>
          );
        })}
        <ButtonWrapper $buttonCount={currentQuestion == 0 ? "one" : "many"}>
          {currentQuestion !== 0 && (
            <Button type="button" onClick={handlePrev}>
              이전문제
            </Button>
          )}
          {currentQuestion === quizzes.length - 1 ? (
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

const QuizSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  background-color: #fff;
  padding: 4.5rem 8rem;
  position: relative;
  ${media.medium`
    width:80%;
    height:80%;
`}
`;

const QuestionNumber = styled.p`
  font-size: 5rem;
  line-height: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  span {
    display: block;
    font-weight: bolder;
  }
  ${media.medium`
    font-size: 4rem;
`}
`;

const QuizQuestion = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  font-size: 4.5rem;
  line-height: 6rem;
  ${media.medium`
    font-size: 3.3rem;
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
    padding: 3.2rem 0;
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
  margin-top: 3.75rem;
`;
QuizCard.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answer: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onNext: PropTypes.func.isRequired, // onNext PropTypes 추가
};
