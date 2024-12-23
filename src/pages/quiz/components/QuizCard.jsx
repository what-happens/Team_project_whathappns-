import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import QuizProgress from "./QuizProgress";
import Button from "../../../components/Button";
import Bookmark from "../../../components/Bookmark";
import { media } from "../../../styles/MideaQuery";
import PropTypes from "prop-types";

export default function QuizCard({
  quiz,
  onSubmit,
  handleAnswerSelect,
  answers,
  onBookmarkUpdate,
  progressComplete,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isLastQuestion = currentQuestion === quiz.length - 1;

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (answers[currentQuestion] && currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(
    quiz.map((q) => q.isBookmark)
  );

  const handleBookmarkClick = async () => {
    try {
      const newBookmarkState = !bookmarkedQuestions[currentQuestion];

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bookmark`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookmark: [
              {
                qid: quiz[currentQuestion].id,
                category: quiz[currentQuestion].category,
                action: bookmarkedQuestions[currentQuestion] ? "delete" : "add",
              },
            ],
          }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("북마크 업데이트 실패");
      }

      const data = await response.json();

      const newBookmarkedQuestions = [...bookmarkedQuestions];
      newBookmarkedQuestions[currentQuestion] = newBookmarkState;
      setBookmarkedQuestions(newBookmarkedQuestions);

      if (onBookmarkUpdate) {
        onBookmarkUpdate(data.bookmark);
      }
    } catch (error) {
      if (onBookmarkUpdate) {
        onBookmarkUpdate(null, error);
      }
    }
  };

  return (
    <QuizSection>
      <Bookmark
        top={"-4.5rem"}
        right={"7.2rem"}
        isBookmarked={bookmarkedQuestions[currentQuestion]}
        onClick={handleBookmarkClick}
      />
      <QuestionNumber>
        문제
        <span>
          {currentQuestion + 1} / {quiz.length}
        </span>
      </QuestionNumber>
      <QuizProgress
        currentQuestionNumber={progressComplete ? quiz.length : currentQuestion}
        totalQuestionNumber={quiz.length}
      />
      <QuizQuestion>{quiz[currentQuestion].question}</QuizQuestion>
      <FormWrapper onSubmit={onSubmit}>
        {quiz[currentQuestion].answers.map((answer, idx) => (
          <QuizInputWrapper key={`${quiz[currentQuestion].id}-${idx}`}>
            <input
              type="radio"
              name="answer"
              id={`${quiz[currentQuestion].id}-${idx}`}
              onChange={() => handleAnswerSelect(answer, currentQuestion)}
              value={answer}
              checked={answer === answers[currentQuestion]}
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
  height: auto;
  ${media.medium`
    width: 80%; 
    padding: 2.8rem 6rem;
  `}
  ${media.small`
    padding: 2.2rem 4.4rem;
    border-radius: 4rem;
    & > svg {
      top:-2.6rem;
      right:4rem;
      width: 4.5rem;
      height: 7.3rem;
    }
  `}
  ${media.xsmall`
    padding: 1.8rem 3.3rem;
    border-radius: 3.6rem;
    & > svg {
      right:3rem;
      width: 3rem;
      height: 6.5rem;
    }
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
  ${media.mediumlarge`
    font-size: 3.3rem;
  `}
  ${media.medium`
    font-size: 3rem;
    line-height: 4.2rem;
  `}
  ${media.small`
    font-size: 2.5rem;
    line-height: 3.8rem;
  `}
  ${media.xsmall`
    font-size: 2rem;
    line-height: 3.5rem;
  `}
`;

const QuizQuestion = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  max-height: 35rem;
  max-width: 55rem;
  word-wrap: break-word;
  font-size: 3rem;
  line-height: 5rem;
  ${media.mediumlarge`
    max-width: 48rem;
    font-size: 2.6rem;
  `}
  ${media.medium`
    max-height: 20rem;
    font-size: 2.3rem;
    line-height: 4rem;
  `}
  ${media.small`
  padding:2rem 0;
  height:auto;
    max-height:26rem;
    font-size: 2rem;
    line-height: 3.8rem;
  `}
  ${media.xsmall`
    max-height: 48rem;
    font-size: 1.5rem;
    line-height: 3rem;
  `}
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  line-height: 3rem;
  ${media.small`
    font-size: 1.5rem;
    line-height: 2.8rem;
  `}
  ${media.xsmall`
    font-size: 1.3rem;
    line-height: 2.5rem;
  `}
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
    padding: 2.8rem 1rem;
    border-radius: 2rem;
    border: 1px solid #2e5dff;
    cursor: pointer;
    ${media.small`
      padding: 1.8rem 0;
  `}
    ${media.xsmall`
      padding: 1.5rem 0;
  `}
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
  & > button {
    ${media.small`
    font-size: 1.5rem;
    padding:0.5rem 1.8rem;
    border-radius:1.6rem;
  `}
    ${media.xsmall`
    font-size: 1.2rem;
    padding:0.3rem 1.4rem;
  `}
  }
`;

QuizCard.propTypes = {
  quiz: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      isBookmark: PropTypes.bool.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleAnswerSelect: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBookmarkUpdate: PropTypes.func,
  progressComplete: PropTypes.bool,
};
