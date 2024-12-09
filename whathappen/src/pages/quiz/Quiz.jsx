import React from "react";
import QuizCard from "./components/QuizCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import prevImg from "../../assets/iconLeftArrow.png";
import PropTypes from "prop-types";
import { media } from "../../styles/MideaQuery";

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

export default function Quiz({ onNext }) {
  return (
    <>
      <QuizHeader>
        <h2 className="sr-only">퀴즈 페이지</h2>
        <nav>
          <StyledLink to="/">
            <StyledImg src={prevImg} alt="" />
            메인으로
          </StyledLink>
        </nav>
      </QuizHeader>
      <QuizMain>
        <QuizCard quizzes={quiz} onNext={onNext} />
      </QuizMain>
    </>
  );
}

const QuizHeader = styled.header`
  width: 100%;
  padding: 2.4rem 0;
  background-color: #2e5dff;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 3rem;
  line-height: 3rem;
  color: #fff;
  text-decoration: none;
  ${media.medium`
    font-size: 2rem;
`}
`;

const StyledImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: contain;
  vertical-align: top;
`;

const QuizMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e5dff;
  padding-bottom: 8rem;
`;

Quiz.propTypes = {
  onNext: PropTypes.func.isRequired,
};
