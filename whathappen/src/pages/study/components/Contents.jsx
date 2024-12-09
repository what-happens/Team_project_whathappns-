import React from "react";
import styled from "styled-components";

const NAV = styled.nav`
  width: 30rem;
  height: 100%;
  border: 1px solid var(--main-color);
  border-radius: 2rem;
`;

const NavList = styled.ol`
  font-size: 2rem;
  li {
    color: black;
  }
`;

const NavItem = styled.ol`
  font-size: 2.4rem;
  color: black;
`;
const Contents = () => {
  return (
    <NAV>
      <NavList>
        <li>Level 01</li>
        <NavItem>
          <li>HTML 기본 용어</li>
          <ol>
            <li>HTMl 이란?</li>
            <li>HTML의 기본 속성</li>
          </ol>
          <li>Study 글자 태그</li>
          <ol>
            <li>제목 태그</li>
            <li>본문 태그</li>
            <li>a 태그</li>
          </ol>
          <li>이미지 태그</li>
          <ol>
            <li>이미지 태그 속성</li>
          </ol>
        </NavItem>
        <li>Level 01: project</li>
      </NavList>
    </NAV>
  );
};

export default Contents;
