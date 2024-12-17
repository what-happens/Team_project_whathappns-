import React, { useState } from "react";
import QuizCard from "./components/QuizCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import prevImg from "../../assets/iconLeftArrow.png";
import { media } from "../../styles/MideaQuery";
import ConfirmExitModal from "../quizResult/components/ConfirmModal";
import backGround from "../../assets/quiz-page-background3.svg";
import useQuizStep from "../../hooks/useQuizStep";
import { useDispatch, useSelector } from "react-redux";
import { setIncorrectQuiz, setCorrectAnswerCount } from "../../redux/quizSlice";

export default function Quiz() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const { resetQuiz } = useQuizStep();
  const { quiz, limit, category } = useSelector((state) => state.quiz);
  const { moveNext } = useQuizStep();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const incorrectIds = [];
    answers.forEach((answer, idx) => {
      if (answer !== quiz[idx].correct_answer) {
        incorrectIds.push({ qid: quiz[idx].id, category: category });
      }
    });
    const corrrectNum = parseInt(limit) - incorrectIds.length;
    dispatch(setCorrectAnswerCount(corrrectNum));
    dispatch(setIncorrectQuiz(incorrectIds));
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
          handleSubmit={handleSubmit}
          handleAnswerSelect={handleAnswerSelect}
          answers={answers}
        />
      </QuizMain>
      {isConfirmModalOpen && (
        <ConfirmExitModal
          isOpen={isConfirmModalOpen}
          onConfirm={resetQuiz}
          onClose={closeConfirmModal}
        />
      )}
    </>
  );
}

const QuizHeader = styled.header`
  width: 100%;
  padding: 5rem 0;
  background-color: var(--main-color);
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
`;

const StyledImg = styled.img`
  width: 3.6rem;
  height: auto;
  object-fit: contain;
  vertical-align: top;
  margin: 0 0.8rem 0 1rem;
`;

const QuizMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGround});
  padding-bottom: 8rem;
`;
