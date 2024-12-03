import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AuthNav() {
  return (
    <Nav>
      <ul>
        <li>
          <StyledLink to="/quiz">퀴즈풀기</StyledLink>
        </li>
        <li>
          <StyledLink to="/exercise">학습하기</StyledLink>
        </li>
        <li>
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
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;
