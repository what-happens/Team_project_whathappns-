import React, { useState } from "react";
import QuizCard from "./QuizCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import prevImg from "../../../assets/iconLeftArrow.png";
import { media } from "../../../styles/MideaQuery";
import ConfirmExitModal from "./ConfirmModal";
import backGround from "../../../assets/quiz-page-background3.svg";
import useQuizStep from "../../../hooks/useQuizStep";
import { useDispatch, useSelector } from "react-redux";
import useFetchQuiz from "../../../hooks/useFetchQuiz";
import {
  setCorrectAnswerCount,
  setIncorrectQuiz,
} from "../../../redux/quizSlice";
import LoadingPotato from "../../../components/LoadingPotato";

export default function Quiz() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [progressComplete, setProgressComplete] = useState(false);
  const { quiz, limit, category, isLoading } = useSelector(
    (state) => state.quiz
  );
  const { resetQuiz } = useQuizStep();
  const { moveNext } = useQuizStep();
  const { postQuizResult } = useFetchQuiz();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const incorrectIds = [];
    setProgressComplete(true);
    answers.forEach((answer, idx) => {
      if (answer !== quiz[idx].correct_answer) {
        incorrectIds.push({ qid: quiz[idx].id, category: category });
      }
    });
    const corrrectNum = parseInt(limit) - incorrectIds.length;
    dispatch(setCorrectAnswerCount(corrrectNum));
    dispatch(setIncorrectQuiz(incorrectIds));
    await postQuizResult();
    moveNext();
  };

  const handleAnswerSelect = (answer, currentQuestion) => {
    const myAnswers = [...answers];
    myAnswers[currentQuestion] = answer;
    setAnswers(myAnswers);
  };

  const closeConfirmModal = () => setConfirmModalOpen(false);

  return (
    <>
      <QuizHeader>
        <h2 className="sr-only">퀴즈 페이지</h2>
        <nav>
          <StyledLink onClick={() => setConfirmModalOpen(true)}>
            <StyledImg src={prevImg} alt="" />
            메인으로
          </StyledLink>
        </nav>
      </QuizHeader>
      <QuizMain>
        <QuizCard
          quiz={quiz}
          onSubmit={handleSubmit}
          handleAnswerSelect={handleAnswerSelect}
          answers={answers}
          progressComplete={progressComplete}
        />
      </QuizMain>
      {isConfirmModalOpen && (
        <ConfirmExitModal
          isOpen={isConfirmModalOpen}
          onConfirm={resetQuiz}
          onClose={closeConfirmModal}
        />
      )}
      {isLoading && <LoadingPotato />}
    </>
  );
}

const QuizHeader = styled.header`
  width: 100%;
  padding: 5rem 0;
  background-color: var(--main-color);
  ${media.small`
    padding: 4rem 0;
  `}
  ${media.xsmall`
    padding: 2rem 0;
  `}
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  line-height: 3rem;
  color: #fff;
  text-decoration: none;
  ${media.medium`
    font-size: 2rem;
  `}
  ${media.small`
    font-size: 1.8rem;
  `}
  ${media.xsmall`
    font-size: 1.6rem;
  `}
`;

const StyledImg = styled.img`
  width: 3.6rem;
  height: auto;
  object-fit: contain;
  vertical-align: top;
  margin: 0 0.8rem 0 1rem;
  ${media.xsmall`
    margin: 0 0.4rem 0 1rem;
  `}
`;

const QuizMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGround});
  padding-bottom: 8rem;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
