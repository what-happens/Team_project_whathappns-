import React from "react";
import QuizCard from "./components/QuizCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import prevImg from "../../assets/iconLeftArrow.png";
import PropTypes from "prop-types";
import { media } from "../../styles/MideaQuery";
import { useState } from "react";
import ConfirmExitModal from "../quizResult/components/ConfirmModal";
import backGround from "../../assets/quiz-page-background3.svg";

const quiz = [
  {
    id: 0,
    category: "HTTP",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
  },
  {
    id: 1,
    category: "HTTP",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
  },
  {
    id: 2,
    category: "HTTP",
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answer: [
      "Hyperlink and Text Markup Language",
      "Hypermeida Text Language",
      "High-text Markup Language",
    ],
  },
];

export default function Quiz() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

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
        <QuizCard quizzes={quiz} />
      </QuizMain>
      {isConfirmModalOpen && (
        <ConfirmExitModal
          isOpen={isConfirmModalOpen}
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

Quiz.propTypes = {
  onNext: PropTypes.func.isRequired,
};
