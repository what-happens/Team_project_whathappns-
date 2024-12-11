import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../../components/Button";
import { media } from "../../../styles/MideaQuery";
import Bookmark from "../../../components/Bookmark";

export default function QuizCard({ quizzes }) {
  const [currentQuestion] = useState(0);
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const shuffled = shuffleArray([
      ...quizzes[currentQuestion].incorrect_answer,
      quizzes[currentQuestion].correct_answer,
    ]);
    setShuffledAnswer([shuffled]);
    setIsLoading(true);
  }, [quizzes]);

  if (!isLoading) {
    return <div>loading</div>;
  }

  return (
    <QuizSection>
      <Bookmark top={"-1.4rem"} right={"3.3rem"} size={"small"} />
      <QuizQuestion>{quizzes[currentQuestion].question}</QuizQuestion>
      <FormWrapper onSubmit={handleOnSubmit}>
        {shuffledAnswer[currentQuestion]?.map((answer, idx) => (
          <QuizInputWrapper key={idx}>
            <input type="radio" name="answer" id={`answer-${idx}`} />
            <label htmlFor={`answer-${idx}`}>{answer}</label>
          </QuizInputWrapper>
        ))}
        <ButtonWrapper $buttonCount={currentQuestion == 0 ? "one" : "many"}>
          <Button type="submit" backgroundColor={"green"}>
            제출하기
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </QuizSection>
  );
}

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
      incorrect_answer: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
