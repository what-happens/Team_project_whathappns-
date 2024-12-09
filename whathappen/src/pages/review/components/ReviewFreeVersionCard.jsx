import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../../components/Button";
// import { media } from "../../../styles/MideaQuery";

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
  border-radius: 0 2rem 2rem 0;
  position: relative;
  padding: 5rem 20rem 10rem 20rem;
  border: 1px solid var(--main-color);
  height: 57rem;
`;

const QuizQuestion = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  font-size: 3.5rem;
  line-height: 5rem;
  text-align: center;
  padding: 0 2rem;
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
    padding: 2.4rem 0;
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
  margin-top: 1.75rem;
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
