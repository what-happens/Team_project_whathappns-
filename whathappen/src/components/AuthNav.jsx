import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/MideaQuery";
import exercise from "../assets/header_exercise_icon.svg";
import quiz from "../assets/header_quiz_icon.svg";
import review from "../assets/header_review_icon.svg";
export default function AuthNav() {
  //dahyung

  return (
    <Nav>
      <ul>
        <li className="isQuiz">
          <StyledLink to="/quiz">퀴즈풀기</StyledLink>
        </li>
        <li className="isExercise">
          <StyledLink to="/exercise">학습하기</StyledLink>
        </li>
        <li className="isReview">
          <StyledLink to="/review">복습노트</StyledLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 6rem;
  font-size: 2.4rem;

  ul {
    display: flex;
    gap: 6rem;
  }
  ${media.medium`
    ul {
      flex-direction: column;
    }
  `}
  ${media.medium`
    li {
      a::before {
        content: '';
        display: inline-block;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 1.6rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      &:nth-child(1) a::before {
        background-image: url(${quiz});
      }
      &:nth-child(2) a::before {
        background-image: url(${exercise});
      }
      &:nth-child(3) a::before {
        background-image: url(${review});
      }
    }
  `}
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;
