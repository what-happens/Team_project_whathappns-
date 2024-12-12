import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";
import Bookmark from "../../../components/Bookmark";
import CheckAnswerModal from "./CheckAnswerModal";
import WrongAnswerModal from "./WrongAnswerModal";

export default function QuizCard({ quizId }) {
  const [quiz, setQuiz] = useState(null);
  const [shuffledAnswer, setShuffledAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [, setError] = useState(null);

  const shuffleArray = (arr) => {
    const newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      if (!quizId) return;

      try {
        const response = await fetch(`http://localhost:5000/quiz/${quizId}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setQuiz(data.quiz);
          const shuffled = shuffleArray([
            ...data.quiz.incorrect_answers,
            data.quiz.correct_answer,
          ]);
          setShuffledAnswer(shuffled);
        } else {
          const errorData = await response.json();
          setError("퀴즈 데이터를 불러오는데 실패했습니다");
          console.error("Error:", errorData);
        }
      } catch (error) {
        setError("서버 통신 중 오류가 발생했습니다");
        console.error("Error:", error);
      }
    };

    fetchQuizData();
  }, [quizId]);

  useEffect(() => {
    if (isCorrect === false) {
      const timer = setTimeout(() => {
        setIsCorrect(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isCorrect]);
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (selectedAnswer === quiz.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  if (!quiz) {
    return null;
  }

  return (
    <QuizSection>
      <Bookmark top={"-1.4rem"} right={"3.3rem"} size={"small"} />
      <QuizQuestion>{quiz.question}</QuizQuestion>
      <FormWrapper onSubmit={handleSubmit}>
        {shuffledAnswer.map((answer, idx) => (
          <QuizInputWrapper key={idx} onClick={() => handleAnswerClick(answer)}>
            <input
              type="radio"
              name="answer"
              id={`answer-${idx}`}
              checked={selectedAnswer === answer}
              readOnly
            />
            <label htmlFor={`answer-${idx}`}>{answer}</label>
          </QuizInputWrapper>
        ))}
        <ButtonWrapper $buttonCount="one">
          <Button type="submit" backgroundColor={"green"}>
            제출하기
          </Button>
        </ButtonWrapper>
      </FormWrapper>

      {isSubmitted && isCorrect === true && (
        <CheckAnswerModal setIsCorrect={setIsCorrect} quiz={quiz} />
      )}

      {isSubmitted && isCorrect === false && <WrongAnswerModal />}
    </QuizSection>
  );
}

QuizCard.propTypes = {
  quizId: PropTypes.number.isRequired,
};

const QuizSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2rem;
  position: relative;
  padding: 5rem;
  border: 1px solid var(--main-color);
  height: 60rem;
  width: 100%;
  max-width: 120rem;

  ${media.large`
   height: auto;
   min-height: 50rem;
   padding: 3rem 2rem;
   border-radius: 1rem;
   max-width: 100%;
   margin: 0 auto;
 `}
`;

const QuizQuestion = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 4rem 0;
  font-size: 3rem;
  line-height: 1.4;
  text-align: center;
  width: 100%;
  word-break: keep-all;
  line-height: 3.5rem;

  ${media.large`
   font-size: 2.4rem;
   margin: 0 0 3rem 0;
   padding: 0 1rem;
 `}
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  line-height: 3rem;
  gap: 1rem;
  padding: 0 2rem;

  ${media.large`
   padding: 0 1rem;
   width: 100%;
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
    padding: 2rem;
    border-radius: 2rem;
    border: 1px solid #2e5dff;
    cursor: pointer;
    word-break: keep-all;
    line-height: 1.4;
  }

  input[type="radio"]:checked + label {
    background-color: #2e5dff;
    color: white;
  }

  ${media.large`
    label {
      font-size: 1.6rem;
      padding: 1.5rem;
      border-radius: 1rem;
    }
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$buttonCount === "one" ? "flex-end" : "space-between"};
  width: 100%;
  margin-top: 2rem;

  ${media.large`
    margin-top: 3rem;
  `}
`;

QuizCard.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
