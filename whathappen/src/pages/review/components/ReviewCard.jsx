import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bookmark from "../../../components/Bookmark";
export default function ReviewCard({ question, correctAnswer, isCorrect }) {
  return (
    <Container>
      <ResultBadge $isCorrect={isCorrect}>{isCorrect ? "O" : "X"}</ResultBadge>
      <Content>
        <Question>문제 : {question} </Question>
        <Answer>답 : {correctAnswer} </Answer>
      </Content>
      <Bookmark top={"-1.4rem"} right={"3.3rem"} size={"small"} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 2rem;
  border: 1px solid #c4c4c4;
  margin: 2rem;
`;

const ResultBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  padding: 1rem;
  background-color: ${(props) => (props.$isCorrect ? "#2E5DFF" : "#FF2E62")};
`;

const Content = styled.div`
  padding: 2rem 6rem 2rem 2rem;
`;

const Question = styled.h3`
  font-size: 2rem;
  line-height: 3rem;
`;

const Answer = styled.p`
  font-size: 2rem;
  line-height: 3rem;
`;

ReviewCard.propTypes = {
  question: PropTypes.string,
  correctAnswer: PropTypes.string,
  isCorrect: PropTypes.bool,
};
