import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/MideaQuery";
import quiz from "../assets/header_quiz_icon.svg";
import exercise from "../assets/header_exercise_icon.svg";
import review from "../assets/header_review_icon.svg";
import mypage from "../assets/header_mypage_icon.svg";

export default function AuthNav() {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink to="/quizpage">
            <img src={quiz} alt="퀴즈풀기" />
            퀴즈풀기
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/study">
            <img src={exercise} alt="학습하기" />
            학습하기
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/review">
            <img src={review} alt="복습노트" />
            복습노트
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mypage">
            <img src={mypage} alt="마이페이지" />
            마이페이지
          </StyledLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 3rem;
  font-size: 1.8rem;

  ul {
    display: flex;
    gap: 5rem;
  }
  ${media.large`
    ul {
      gap: 3rem;
    }
    li{
      font-size:1.6rem
    }
  `}
  ${media.mediumlarge`
    margin-left: 0;
    padding-top: 18rem;
    ul {
      flex-direction: column;
      gap: 3rem;
    }
  `}
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  img {
    display: none;
  }
  ${media.mediumlarge`
    display: flex;
    align-items: center;
    img {
      display: inline-block;
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 1.2rem;
    }
  `}
`;
