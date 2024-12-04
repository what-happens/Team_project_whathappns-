import React from "react";
import ReviewCard from "./components/ReviewCard";
import styled from "styled-components";
import Button from "../../components/Button";

const reviews = [
  {
    id: 0,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: true,
  },
  {
    id: 1,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
  {
    id: 2,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: false,
    bookmark: true,
  },
  {
    id: 3,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
  {
    id: 4,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: true,
  },
  {
    id: 5,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: true,
  },
  {
    id: 6,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: true,
  },
  {
    id: 7,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: false,
    bookmark: true,
  },
  {
    id: 8,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
  {
    id: 9,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: true,
  },
  {
    id: 10,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: true,
  },
  {
    id: 11,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: false,
    bookmark: true,
  },
  {
    id: 12,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
  {
    id: 13,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
  {
    id: 14,
    question:
      "HTML은 무엇의 약자일까요? HTML은 무엇의 약자일까요? HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
  {
    id: 15,
    question: "HTML은 무엇의 약자일까요?",
    correct_answer: "Hypertext Markup Language",
    isCorrect: true,
    bookmark: false,
  },
];

export default function Review() {
  return (
    <main style={{ margin: "0 auto" }}>
      <ReviewContainer>
        <h2>
          내 복습노트
          <data value="8"> 총 : {reviews.length}</data>
        </h2>
        <ButtonWrapper>
          <Button
            type="button"
            backgroundColor={"red"}
            borderRadius={"1rem"}
            padding={"1rem 1rem"}
            fontSize={"small"}
          >
            전체 답안 보기
          </Button>
          <Button
            type="button"
            backgroundColor={"red"}
            borderRadius={"1rem"}
            padding={"1rem 1rem"}
            fontSize={"small"}
          >
            선택삭제
          </Button>
          <Button
            type="button"
            borderRadius={"1rem"}
            padding={"1rem 1rem"}
            fontSize={"small"}
          >
            선택 퀴즈생성
          </Button>
        </ButtonWrapper>
        <ReviewCardSection>
          <h3 className="sr-only">복습 노트 문제</h3>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              question={review.question}
              correctAnswer={review.correct_answer}
              isCorrect={review.isCorrect}
            />
          ))}
        </ReviewCardSection>
      </ReviewContainer>
    </main>
  );
}

const ReviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  height: 80vh;
  max-width: 120rem;
  margin: 4rem auto;
  padding: 6rem 4.8rem 6rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 0px;

  h2 {
    font-size: 4rem;
    line-height: 6rem;
    color: #2e5def;

    data {
      font-size: 3rem;
      padding-left: 2rem;
    }
  }
`;

const ReviewCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 60vh;
  overflow-y: auto;

  /* 웹킷 기반 브라우저 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-end;
  margin: 2rem;
`;
